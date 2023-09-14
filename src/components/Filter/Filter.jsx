import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from 'redux/selector';
import { filterCars } from 'redux/filterSlice';
import css from "./Filter.module.css"


export const FilterCar = () => {
    const filter = useSelector(selectFilter);
    console.log(filter)
    const dispatch = useDispatch();
  
    const handleFilterChange = ({ target: { value } }) => {
      dispatch(filterCars(value));
    };
  
    return (
      <div className={css.container}>
        <div className={css.input__container}>
        <p className={css.input__title} >Car brand</p>
        {/* <select value={filter}>
        </select>        */}
        <input className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter the text"
      /> 
      </div>
      <div className={css.input__container} >
        <p className={css.input__title}>Price/ 1 hour</p>       
        <input
        // className={css.input}
        type="numer"
        value={filter}
        onChange={handleFilterChange}
        name="filter"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="To"
      /> 
      </div>
      <div>
        <p className={css.input__title}>Сar mileage / km</p>       
        <input
        // className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        name="filter"
        required
        placeholder="From"
      /> 
      <input
        // className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        name="filter"
        required
        placeholder="To"
      /> 
      </div>
      </div>  
      
    );
  };