import { useState } from 'react';
import sprite from '../picture/sprite-icon.svg';
import defaultImage from '../picture/default.png';
import css from './CarItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { CarCard } from 'components/CarCard.jsx/CarCard';

// import { getAdvertById, updateAdvert } from '../Api/Api';

export const CarItem = ({
  data,
  addFavorit,
  dellFavorit,
  collection,
  setCollection,
}) => {
console.log(collection)
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const [isFavorites, setIsFavorites] = useState(false);
  const location = data.address.split(',');
  const {
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
    mileage,
    isFavorites,
  } = data;

  const updateCard = (collection, cardId, newCard) => {
    const result = collection.map(el => {
      if (el.id === cardId) {
        return { ...newCard };
      }
      return el;
    });
    return result;
  };

  const handlerSetFavorites = data => {
    const newAdvert = {
      ...data,
      isFavorites: !data.isFavorites,
    };

    addFavorit(newAdvert);
    setCollection(updateCard(collection, data.id, (data = newAdvert)));
    return;
  };

  const dellSetFavorites = () => {
    dellFavorit(data.id);
    data.isFavorites = false;
  };

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className={css.cartItem}>
      {!isFavorites ? (
        <button
          type="button"
          className={css.button__favorite}
          onClick={() => handlerSetFavorites(data)}
        >
          <svg className={css.icon_normal}>
            <use href={sprite + '#normal'} />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className={css.button__favorite}
          onClick={dellSetFavorites}
        >
          <svg className={css.icon_active}>
            <use href={sprite + '#active'} />
          </svg>
        </button>
      )}

      <div className={css.card}>
        <img
          src={img ? img : defaultImage}
          alt={id}
          className={css.card__img}
        />
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
          <p className={css.car__info}>{location[2]}</p>
          <svg className={css.icon}>
            <use href={sprite + '#border'} />
          </svg>
          <p className={css.car__info}>{location[1]}</p>
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
