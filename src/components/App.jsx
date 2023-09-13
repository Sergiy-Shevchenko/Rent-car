// import { Routes, Route } from "react-router-dom";
// import { Layout } from "./Layout";
// import { HomePage } from "pages/HomePage";
// import { CarCatalog } from "pages/CarCatalogPage";
// import { CarFavorite } from "pages/CarFavoritePage";

import { CarList } from "./CarList/CarList";
import { FilterCar } from "./Filter/Filter";


export const App = () => {
  
  return  (
    
    <div>
       <div 
      //  className={css.container}
       >
      <h1 
      // className={css.title}
      >Rent car</h1>
    </div>
    <FilterCar/>
    <CarList/>
    </div>
  )
};
