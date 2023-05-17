import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { HeroeCard } from "../components/HeroeCard";
import { getHeroesByname } from "../helpers/getHeroesByName";

export const Search = () => {

const navigate = useNavigate();
const location = useLocation();

const { q = '' } = queryString.parse(location.search);
const heroes = getHeroesByname(q);


  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if(searchText.trim().length <= 1) return;
    
    navigate(`?q=${searchText}`)
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
    <div className="row">
      <div className="col-5">
        <h4>Búsqueda</h4>
        <hr />
        <form onSubmit={ onSearchSubmit } aria-label="form">
          <input
            type="text"
            placeholder="Ingresa el heroe..."
            className="form-control p-3"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
        <button className="mt-3 btn btn-success">Buscar</button>
        </form>
      </div>
      <div className="col-7">
      <h4>Resultado</h4>
      <hr />
    {
      ( q === '' ) ? <div className="alert alert-success">Busca tu Heroe</div>
      :
      ( heroes.length === 0 ) && <div className="alert alert-danger">
        No se encontraron resultados de búsqueda para <b>{q}</b>
        </div>
    }

      {
        heroes.map( hero => ( 
        <HeroeCard key={hero.id} {...hero}/> 
        ) )
      }

      </div>
    </div>
    </>
  );
};
