import { CarItem } from "components/CarItem/CarItem"
import css from './CarFavorit.module.css'

const styles = {
    container: {
      width: 1400,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  };

const carFavoriteNosing = () => {
    return (
        <div className={css.section__title}>
            <h3 className={css.title}>The collection of favorite cars is empty</h3>
        </div>
    )
}


 const CarFavorite = ({collection = [], setCollection, dellFavorit }) => {
    // console.log(collection)

    return (
      <div style={styles.container}>
       <ul className={css.carList}>
        {collection.length === 0 ? carFavoriteNosing() : collection.map(el => (
            <li key={el.id}>
                <CarItem
                data={el}
                collection={collection}
                setCollection={setCollection}
                dellFavorit={dellFavorit}/>
            </li>
        ))}
       </ul>
      </div>
    )}
    
export default CarFavorite