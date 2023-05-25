import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { page, pokemons = [], isLoading } = useSelector((state)=> state.pokemons);

  useEffect(() =>{
    dispatch(getPokemon());
  }, [])

  return (
    <>
    <h1>PokemonApp</h1>
    <hr />
    <span>Loading: { isLoading ? 'True' : 'False' }</span>
    <ul>
      {
        pokemons.map( ({name}) => (
          <li key={name}>{name}</li>
        ))
      }
    </ul>
    <button
    disabled={ isLoading }
    onClick={() => dispatch(getPokemon(page))}
    >
      Next
    </button>
    </>
  )
}
