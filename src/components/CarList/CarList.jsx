import React, { useEffect } from "react";
import { CarItem } from "components/CarItem/CarItem";

import { useDispatch, useSelector } from "react-redux";
import { fethcCars } from "redux/operations";
import { selectIsLoading, selectError, visibleCars } from 'redux/selector';
import css from "./Carlist.module.css"

// import { FilterCar } from "components/Filter/Filter";


// import { selectCars } from "redux/selector";


export const CarList = () => {
    const dispatch = useDispatch()
    


    // const cars = useSelector(selectCars);
    // console.log(cars)
    const filterCars = useSelector(visibleCars);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  

  
    useEffect(() => {
      dispatch(fethcCars());
    }, [dispatch]);
  
    if (filterCars.length === 0) return null;
  
    return (
      <div className={css.container}
      >
        <ul className={css.carList}
        >
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
          {filterCars.map(({id, make, model, 
          img, year, rentalPrice, address, rentalCompany, type, accessories
        }) => ( 
            <CarItem 
            id={id} 
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
            />
          )) 
          }  
        </ul>
      </div>
    );
  };