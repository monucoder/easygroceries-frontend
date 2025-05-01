import React, { useState } from 'react';
import { BasketItem } from '../models/BasketItem';
import { placeOrder } from '../api/orderApi';
import { Order } from '../models/Order';
import { OrderPayload } from '../models/OrderPayload';
import { useNavigate } from 'react-router-dom';

interface CheckoutProps {
  basket: BasketItem[];
  clearBasket: () => void;
  onOrderPlaced: (order: Order) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ basket, clearBasket, onOrderPlaced }) => {
  const [shippingAddress, setShippingAddress] = useState('');
  const [includeLoyalty, setIncludeLoyalty] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!shippingAddress) {
      alert("Please enter shipping address.");
      return;
    }

    const order: OrderPayload = {
      customerId: 35496,
      items: basket.map(item => ({
        productId: item.product.id,
        productName: item.product.name,
        unitPrice: item.product.price,
        quantity: item.quantity,
        isLoyalty: item.product.name.toLowerCase().includes("loyalty")
      })),
      includeLoyalty,
      shippingAddress,
      totalAmount: 0
    };
      

    const response = await placeOrder(order);
    clearBasket();
    navigate('/confirmation', { state: { order: response } });
    //onOrderPlaced(response);
  };

  return (
    <div className='container'>
      <h2>Checkout</h2>
      <label>Shipping Address:</label><br/>
      <input 
        type="text" 
        value={shippingAddress}
        onChange={e => setShippingAddress(e.target.value)}
        placeholder="Enter your address"
      /><br/><br/>

      <label>
        <input 
          type="checkbox"
          checked={includeLoyalty}
          onChange={e => setIncludeLoyalty(e.target.checked)}
        />
        Add Loyalty Membership (£5) for 20% discount
      </label><br/><br/>

      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;