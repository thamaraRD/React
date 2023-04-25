import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroeCard } from '../components/HeroeCard'
import { useMemo } from "react";

export const HeroeList = ({ publisher }) => {
//No es necesario en este caso el useMemo
  const heroes =  useMemo( () => getHeroesByPublisher(publisher), [publisher] );

  return (
     
      <div className="row rows-cols-1 row-cols-md-3 g-3">
        { heroes.map( heroe => (
        
          <HeroeCard key={heroe.id} 
            { ...heroe }
          />

        ))
      }
      </div>
  
  )
}
