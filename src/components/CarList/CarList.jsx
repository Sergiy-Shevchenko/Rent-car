import React, { useEffect, useState } from "react";
import { CarItem } from "components/CarItem/CarItem";

import { useDispatch, useSelector } from "react-redux";
// import { fethcCars } from "redux/operations";
import { fethcCars } from "components/Api/Api";
import { selectIsLoading, selectError, visibleCars } from 'redux/selector';
import css from "./Carlist.module.css"



// import { FilterCar } from "components/Filter/Filter";


// import { selectCars } from "redux/selector";


export const CarList = () => {
    // const dispatch = useDispatch()
    const [card, setCard] = useState([])
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)
     // const cars = useSelector(selectCars);
    // console.log(cars)
    const filterCars = useSelector(visibleCars);
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);
  


  
    
   useEffect(() => {
    const getCarCard = async () => {
      try { 
        const data = await fethcCars(page)
        console.log(data)

        // if (data.length <= 8) {
        //   setLoading(false)
          setCard((prev)=> [...prev, ...data])
        // }
        
      } catch (error) {
        setError(error.message)}}
      getCarCard()      
          }, [page]);



    const addCar = () => {
      setPage((prev)=> prev+1)
      console.log('click')

    }
    console.log(page)
    console.log(card)

    return (
      <div className={css.container}>
        <ul className={css.carList}>
          {isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          {card.map(
            ({
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
                fuelConsumption={fuelConsumption}
                engineSize={engineSize}
                description={description}
                functionalities={functionalities}
                rentalConditions={rentalConditions}
                mileage={mileage}
               
              />
            )
          )}
        </ul>
        <button className={css.button} onClick={addCar} >Load more</button>
      </div>
    );
  };