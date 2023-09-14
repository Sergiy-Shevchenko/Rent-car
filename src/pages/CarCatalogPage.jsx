import { React } from 'react';

import { CarList } from 'components/CarList/CarList';
import { FilterCar } from 'components/Filter/Filter';


const styles = {
  container: {
    width: 1400,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  }}


export const CarCatalog = () => {
    // const dispatch = useDispatch();
  
    // useEffect(() => {
    //   dispatch(fethcContacts());
    // }, [dispatch]);
  
    return (
      <div style={styles.container}>
        <FilterCar/>
        <CarList/>      
      </div>
    );
  };