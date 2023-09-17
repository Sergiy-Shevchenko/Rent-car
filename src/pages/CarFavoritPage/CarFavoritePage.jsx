// import { CarList } from "components/CarList/CarList"
import { CarItem } from "components/CarItem/CarItem"

 const CarFavorite = ({collection = [], setCollection, dellFavorit }) => {
    return (
      <div>
       <ul>
        {collection.length > 0 && collection.map(el => (
            <li key={el.id}>
                <CarItem
                data={el}
                collection={collection}
                setCollection={setCollection}
                delFavorit={dellFavorit}/>
            </li>
        ))}
       </ul>
      </div>
    )}
    
export default CarFavorite