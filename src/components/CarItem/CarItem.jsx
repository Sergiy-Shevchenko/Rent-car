import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
import css from './CarItem.module.css';
import { ReactComponent as AddIcon } from '../picture/border.svg';
import { Modal } from 'components/Modal/Modal';
import { CarCard } from 'components/CarCard.jsx/CarCard';

export const CarItem = (
  { id, make, model, img, year, rentalPrice, address, rentalCompany, type, accessories },
  key
) => {
  // const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };



  return (
    <div>
      <li className={css.cartItem} key={key}>
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
            <AddIcon className={css.icon }/>
            <p className={css.car__info}>{rentalCompany}</p>
          </div>
          <div className={css.car__option}>
                  <p className={css.car__info }>{type}</p>
            <AddIcon className={css.icon}/>
            <p className={css.car__info}>{model}</p>
            <AddIcon className={css.icon}/>
            <p className={css.car__info}>{id}</p>
            <AddIcon className={css.icon}/>
            <p className={css.car__info}>{accessories[1]}</p>
          </div>
          <button className={css.button}
            type="button"
              onClick={()=>handleOpenModal()}
          >
            Learn more
          </button>
        </div>
      </li>
      {isOpenModal && (<Modal openModal={handleOpenModal}>
<CarCard closeModal={handleOpenModal}/>
      </Modal>)}
    </div>
  );
};
