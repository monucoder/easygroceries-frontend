import axios from 'axios';
import { Product } from '../models/Product';

const API_URL = "https://localhost:7138/api/gateway";

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${API_URL}/products`);
  return response.data;
};