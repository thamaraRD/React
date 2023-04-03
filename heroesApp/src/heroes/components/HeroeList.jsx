import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroeCard } from '../components/HeroeCard'

export const HeroeList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);

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
