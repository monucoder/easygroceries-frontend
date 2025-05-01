import React from 'react';

interface OrderItem {
  productId: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  isLoyalty: boolean;
}

interface Order {
  customerId: number;
  orderNumber: number;
  shippingAddress: string;
  totalAmount: number;
  items: OrderItem[];
}

interface ShippingSlipProps {
  order: Order;
}

const ShippingSlip: React.FC<ShippingSlipProps> = ({ order }) => {
  if (!order || !order.items) {
    return <div><strong>Error:</strong> Order data not available.</div>;
  }

 
  const physicalItems = order.items.filter(
    item => item.productName && !item.productName.toLowerCase().includes("loyalty")
  );

  return (
    <div className='container'>
      <h2>Shipping Slip</h2>
      <p><strong>Customer ID:</strong> {order.customerId}</p>
      <p><strong>Order Number:</strong> {order.orderNumber}</p>
      <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>

      <h3>Items to Ship:</h3>
      <ul>
        {physicalItems.map((item, index) => (
          <li key={index}>
            {item.productName} - Qty: {item.quantity}
          </li>
        ))}
      </ul>

      <h3>Total Paid: £{order.totalAmount}</h3>
    </div>
  );
};

export default ShippingSlip;
