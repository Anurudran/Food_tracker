import axios from 'axios';

const API_KEY = 'your_api_key_here';

const BASE_URL = 'https://api.nal.usda.gov/fdc/v1/';

export const getFoodById = async (foodId) => {
  const response = await axios.get(`${BASE_URL}/food/${foodId}?api_key=${API_KEY}`);
  return response.data;
};
