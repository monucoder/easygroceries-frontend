import axios from 'axios';
import { BasketItem } from '../models/BasketItem';

const API_URL = "https://localhost:7138/api/gateway";

export const addToBasket = async (item: BasketItem) => {
  await axios.post(`${API_URL}/addtobasket`, item);
};

export const fetchBasketItems = async () => {
  const response = await axios.get(`${API_URL}/basketitems`);
  return response.data;
};

export const clearBasket = async () => {
  await axios.delete(`${API_URL}/clearbasket`);
};