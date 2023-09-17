import React, { useEffect, useState } from 'react';
import { CarItem } from 'components/CarItem/CarItem';
import { fethcAllCars } from 'components/Api/Api';
import css from './Carlist.module.css';

export const CarList = ({ addFavorit, dellFavorit }) => {
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
    <div className={css.container}>
      <ul className={css.carList}>
        {allCars.length > 0 &&
          allCars.map((el, index) => (
            <li key={index} className={css.cartItem}>
              <CarItem
                data={el}
                addFavorit={addFavorit}
                delFavorit={dellFavorit}
                collection={allCars}
                setCollection={setAllCars}
              />
            </li>
          ))}
      </ul>
      <button className={css.button} onClick={addCard}>
        Load more
      </button>
    </div>
  );
};
