import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterCars: (state, {payload}) => {
      state.filter = payload;
    },
  },
});
export const { filterCars } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;