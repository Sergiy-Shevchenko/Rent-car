import React from 'react';
// import { useDispatch } from "react-redux";
import css from './CarItem.module.css';
import { ReactComponent as AddIcon } from '../picture/border.svg';

export const CarItem = (
  { id, make, model, img, year, rentalPrice, address, rentalCompany, type, accessories },
  key
) => {
  // const dispatch = useDispatch();

  // const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <li className={css.contactItem} key={key}>
        <div className={css.card}>
          <img src={img} alt={id} className={css.card__img} />
          <div className={css.card_title}>
            <span className={css.card__car__info}>
              <p className={css.car__make}>{make}</p>
              <p className={css.car__model}>{model}, </p>
              <p className={css.car__year}>{year}</p>
            </span>
            <span>
              <p className={css.car__price}>{rentalPrice}</p>
            </span>
          </div>
          <div className={css.car__location}>
            <p className={css.car__info}>{address}</p>
            <AddIcon/>
            <p className={css.car__info}>{rentalCompany}</p>
          </div>
          <div className={css.car__option}>
            <p className={css.car__info }>{type}</p>
            <p className={css.car__info}>{model}</p>
            <p className={css.car__info}>{id}</p>
            <p className={css.car__info}>{accessories[0]}</p>
          </div>
          <button className={css.button}
            type="button"
            //   onClick={handleDelete}
          >
            Learn more
          </button>
        </div>
      </li>
    </>
  );
};
