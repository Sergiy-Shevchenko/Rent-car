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

//-------------------------------------------------------



// const initialState = {
//     status: statusFilters.all,
//   };


// const statusFilters = Object.freeze({
//     all: "all",
//     active: "active",
//     completed: "completed",
//   });

//   const filtersSlice = createSlice({
//     name: "filter",
//     initialState: filtersInitialState,
//     reducers: {
//       setStatusFilter(state, action) {
//         state.status = action.payload;
//       },
//     },
//   });
  
//   export const { setStatusFilter } = filtersSlice.actions;
//   export const filtersReducer = filtersSlice.reducer;
  


