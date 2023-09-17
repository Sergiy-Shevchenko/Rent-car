import { React } from 'react';
import { CarList } from 'components/CarList/CarList';

const styles = {
  container: {
    width: 1400,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const CarCatalog = () => {
  return (
    <div style={styles.container}>
      <CarList />
    </div>
  );
};

export default CarCatalog