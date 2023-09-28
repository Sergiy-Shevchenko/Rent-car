import React, { useEffect, useState } from 'react';
import { CarItem } from 'components/CarItem/CarItem';
import { fethcAllCars } from 'components/Api/Api';
import css from './CarCatalog.module.css';

const styles = {
  container: {
    width: 1400,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const CarCatalog = ({ addFavorit, dellFavorit }) => {


  const [allCars, setAllCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fethcAllCars(page)
      .then(data => {
        if (data) {
          setAllCars(prev => [...prev, ...data]);
        }
      })
      .catch(error => console.log(error.message));
  }, [page]);

  const addCard = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div style={styles.container}>
     <ul className={css.carList}>
        {allCars.length > 0 &&
          allCars.map((el, index) => (
            <li key={index} className={css.cartItem}>
              <CarItem
                data={el}
                addFavorit={addFavorit}
                dellFavorit={dellFavorit}
                collection={allCars}
                setCollection={setAllCars}
              />
            </li>
          ))}
      </ul>
      {allCars.length >= 8 && (
        <button className={css.button} onClick={addCard}>
        Load more
      </button>
      )}      
    </div>
  );
};

export default CarCatalog;