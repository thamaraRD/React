import {useLocation, useNavigate} from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { HeroeCard } from "../components/HeroeCard";

export const Search = () => {

const navigate = useNavigate();
const location = useLocation();

const query = queryString.parse(location.search)
console.log({query});


  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.trim().length <= 1) return;
    
    navigate(`?=${searchText}`)
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
    <div className="row">
      <div className="col-5">
        <h4>Búsqueda</h4>
        <hr />
        <form onSubmit={ onSearchSubmit }>
          <input
            type="text"
            placeholder="Ingresa el heroe..."
            className="form-control p-3"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}
          />
        </form>
        <button className="mt-3 btn btn-success">Buscar</button>
      </div>
      <div className="col-7">
      <h4>Resultado</h4>
      <hr />
      <div className="alert alert-success">
    Busca tu Heroe
      </div>
      <div className="alert alert-danger">
    No se encontraron resultados de búsqueda
      </div>

      {/* <HeroeCard/> */}

      </div>
    </div>
    </>
  );
};
