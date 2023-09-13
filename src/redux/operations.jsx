import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648db88a2de8d0ea11e826bf.mockapi.io';

export const fethcCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/cars');
        console.log(data)
      return data;
    
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
