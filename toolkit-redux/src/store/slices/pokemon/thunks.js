import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";


export const getPokemon = ( page = 0 ) => {
return async( dispatch, getState ) => {
  dispatch(startLoadingPokemons());

  //Con Fetch

  // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
  // const data = await resp.json();
  // console.log(data);

  //Con Axios

  const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
  // console.log(data);

  dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
}

};