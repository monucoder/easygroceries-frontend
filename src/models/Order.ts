import { OrderItem } from "./OrderItem";

export interface Order {
  customerId: number;
  items: OrderItem[];
  includeLoyalty: boolean;
  shippingAddress: string;
  totalAmount: number;
  orderNumber: number;
}