import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const Hero = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( ()=> getHeroById(id), [ id ] );

  const onNavigateBack = () =>{
  navigate("/");
  }

 if (!hero){
  return < Navigate to="/marvel" />
 }

 const imageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="row mt-5 animate__animated animate__fadeInTopRight">
    <div className="col-4">
      <img 
      src={imageUrl} 
      alt={hero.superhero}
      className="img-thumbnail"
      />
    </div>

    <div className="col-8">
      <h3>{hero.superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li>
        <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li>
        <li className="list-group-item"><b>First appearance: </b>{hero.first_appearance}</li>
      </ul>

      <h5 className="mt-5">Characters</h5>
      <p>{hero.characters}</p>

      <button 
      className="btn btn-primary"
      onClick={onNavigateBack}
      >
        Back
      </button>
    </div>
    </div>
  )
}
