import axios from 'axios';

axios.defaults.baseURL = 'https://648db88a2de8d0ea11e826bf.mockapi.io';

export const fethcAllCars = async (page = 1, limit = 8) => {
  try {
    const { data } = await axios.get(`/adverts?p=${page}&l=${limit}`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// export const updateAdvert = async (id, data) => {
//   try {
//     return await axios.put(`/adverts/${id}`, data);
//     // console.log(data)
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getAdvertById = async id => {
//   try {
//     return await axios(`/adverts/${id}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
