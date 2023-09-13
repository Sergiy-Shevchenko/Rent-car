import { createSlice } from '@reduxjs/toolkit';
import { fethcCars} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fethcCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })      
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const carsReduser = carsSlice.reducer;