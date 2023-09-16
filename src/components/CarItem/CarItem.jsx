import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
import sprite from '../picture/sprite-icon.svg';
import css from './CarItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { CarCard } from 'components/CarCard.jsx/CarCard';

export const CarItem = (
  {
    id,
    make,
    model,
    img,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage
  },
  key
) => {
  // const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
    
  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };




//   const  Message = (accessories) => {
//     const maxLength = 10;
//     // let result;
//     // Change code below this line
//   if (accessories.length <= maxLength)   {
//       return accessories;
//     }   else { 
//       return accessories.slice(0, maxLength) + "...";
//     }
//     /// Change code above this line
//     // return result;
//   }






  return (
    <div>
      <li className={css.cartItem} key={key}>
        {/* <input type={'checkbox'} className={css.checkbox}/> */}
        <button type="button" className={css.button__favorite}>
        <svg className={css.favorite__icon}>
              <use href={sprite + '#normal'} />
            </svg>
        </button>
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
            <p className={css.car__info}>{address[1]}</p>
            <svg className={css.icon}>
              <use href={sprite + '#border'} />
            </svg>
            <p className={css.car__info}>{address[0]}</p>
            <svg className={css.icon}>
              <use href={sprite + '#border'} />
            </svg>
            <p className={css.car__info}>{rentalCompany}</p>
          </div>
          <div className={css.car__option}>
            <p className={css.car__info}>{type}</p>
            <svg className={css.icon}>
              <use href={sprite + '#border'} />
            </svg>
            <p className={css.car__info}>{model}</p>
            <svg className={css.icon}>
              <use href={sprite + '#border'} />
            </svg>
            <p className={css.car__info}>{id}</p>
            <svg className={css.icon}>
              <use href={sprite + '#border'} />
            </svg>
            <p className={css.car__info}>{accessories[0]}</p>
          </div>
          <button
            className={css.button__open_modal}
            type="button"
            onClick={() => handleOpenModal()}
          >
            Learn more
          </button>
        </div>
      </li>
      {isOpenModal && (
        <Modal openModal={handleOpenModal}>
          <CarCard
            make={make}
            model={model}
            key={id}
            img={img}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            rentalCompany={rentalCompany}
            type={type}
            accessories={accessories}
            id={id}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            functionalities={functionalities}
            rentalConditions={rentalConditions}
            mileage={mileage}

            closeModal={handleOpenModal}
          />
        </Modal>
      )}
    </div>
  );
};
