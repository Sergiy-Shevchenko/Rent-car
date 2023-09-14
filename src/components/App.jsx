import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "pages/HomePage";
import { CarCatalog } from "pages/CarCatalogPage";
import { CarFavorite } from "pages/CarFavoritePage";


export const App = () => {
  // const dispatch = useDispatch();
  // const isRegresing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return  (
   
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CarCatalog/>}/>
          <Route path="favorites" element={<CarFavorite />}/>          
        </Route>
      </Routes>
    </div>
  );
};


















// export const App = () => {
  
//   return  (
    
//     <div>
//        <div 
//       //  className={css.container}
//        >
//       <h1 
//       // className={css.title}
//       >Rent car</h1>
//     </div>
//     <FilterCar/>
//     <CarList/>
//     </div>
//   )
// };
