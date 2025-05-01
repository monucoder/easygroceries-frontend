export interface OrderItemPayload {
    productId: number;
    productName: string;
    unitPrice: number;
    quantity: number;
    isLoyalty: boolean;
  }
  
  export interface OrderPayload {
    customerId: number;
    items: OrderItemPayload[];
    includeLoyalty: boolean;
    shippingAddress: string;
    totalAmount: number;
  }
  