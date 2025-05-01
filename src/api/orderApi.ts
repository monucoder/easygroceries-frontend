import axios from 'axios';
import { Order } from '../models/Order';
import { OrderPayload } from '../models/OrderPayload'; 

const API_URL = "https://localhost:7138/api/gateway";

export const placeOrder = async (order: OrderPayload) => {
  const response = await axios.post(`${API_URL}/createorder`, order);
  return response.data;
};