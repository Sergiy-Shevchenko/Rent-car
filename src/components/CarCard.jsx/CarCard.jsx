import React from 'react';
import sprite from '../picture/sprite-icon.svg';
import css from './CarCard.module.css';

export const CarCard = ({
  id,
  make,
  model,
  img,
  year,
  rentalPrice,
  address,
  type,
  accessories,
  fuelConsumption,
  engineSize,
  description,
  functionalities,
  rentalConditions,
  mileage,
}) => {
  
  
    const location = address.split(',');
    const driver = rentalConditions.split(' ')
    console.log(driver)


  return (
    <div>
      <img src={img} alt={make} className={css.img} />
      <div className={css.card_title}>
        <span className={css.card__car__info}>
          <p className={css.car__make}>{make}</p>
          <p className={css.car__model}>{model}, </p>
          <p className={css.car__year}>{year}</p>
        </span>
      </div>
      <div className={css.car__location}>
        <p className={css.car__info}>{location[1]}</p>
        <svg className={css.icon}>
          <use href={sprite + '#border'} />
        </svg>
        <p className={css.car__info}>{location[2]}</p>
        <svg className={css.icon}>
          <use href={sprite + '#border'} />
        </svg>
        <p className={css.car__info}>id: {id}</p>
        <svg className={css.icon}>
          <use href={sprite + '#border'} />
        </svg>
        <p className={css.car__info}>Year: {year}</p>
        <svg className={css.icon}>
          <use href={sprite + '#border'} />
        </svg>
        <p className={css.car__info}>Type: {type}</p>
      </div>
      <div className={css.car__option}>
        <p className={css.car__info}>Fuel Consumption: {fuelConsumption}</p>
        <svg className={css.icon}>
          <use href={sprite + '#border'} />
        </svg>
        <p className={css.car__info}>Engine Size: {engineSize}</p>
      </div>
      <div className={css.car__description}>{description}</div>
      <div className={css.car__functional}>
        <p className={css.car__functional__title}>
          Accessories and functionalities:
        </p>
        <div className={css.car__func}>
          <p className={css.car__info}>{accessories[0]}</p>
          <svg className={css.icon}>
            <use href={sprite + '#border'} />
          </svg>
          <p className={css.car__info}>{accessories[1]}</p>
          <svg className={css.icon}>
            <use href={sprite + '#border'} />
          </svg>
          <p className={css.car__info}>{accessories[2]}</p>
        </div>
        <div className={css.car__func}>
          <p className={css.car__info}>{functionalities[0]}</p>
          <svg className={css.icon}>
            <use href={sprite + '#border'} />
          </svg>
          <p className={css.car__info}>{functionalities[1]}</p>
          <svg className={css.icon}>
            <use href={sprite + '#border'} />
          </svg>
          <p className={css.car__info}>{functionalities[2]}</p>
        </div>
        <div>
          <p className={css.car__rent_title}>Rental Conditions:</p>
          <p className={css.car__rent_condition}>{rentalConditions}</p>
          <div className={css.car__odometr__price}>
            <p className={css.car__rent_condition}>Mileage:</p>
            <p className={css.car__odometr}>{mileage}</p>
            <p className={css.car__rent_condition}>Price: </p>
            <p className={css.car__price}>{rentalPrice}</p>
          </div>
        </div>
      </div>

      <a href="tel:+380730000000" className={css.button__modal}>
        Rental car
      </a>
    </div>
  );
};
