import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectIsLoading = state => state.cars.getIsLoading;
export const selectFilter = state => state.filter.filter;
export const selectError = state => state.cars.error;

export const visibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const nopmalizedFilter = filter.toLowerCase();

    return cars.filter(({ make}) =>
      make.toLowerCase().includes(nopmalizedFilter)
    );
  }
);