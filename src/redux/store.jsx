import { configureStore } from '@reduxjs/toolkit';

import { carsReduser } from './carsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    cars: carsReduser,
    filter: filterReducer,
  },
});