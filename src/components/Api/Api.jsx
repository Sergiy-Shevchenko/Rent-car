import axios from 'axios';

axios.defaults.baseURL = 'https://648db88a2de8d0ea11e826bf.mockapi.io';

export const fethcCars = async (page = 1) => {
  const { data } = await axios.get(`/cars?p=${page}&l=8`);
  console.log(data);
  return data;
};
