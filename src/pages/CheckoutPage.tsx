import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Checkout from '../components/Checkout';
import { BasketItem } from '../models/BasketItem';
import { Order } from '../models/Order';

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { basket } = location.state as { basket: BasketItem[] };

  const clearBasket = () => { };

  const handleOrderPlaced = (order: Order) => {
    navigate('/confirmation', { state: { order } });
  };

  return (
    <div>
      <Checkout basket={basket} clearBasket={clearBasket} onOrderPlaced={handleOrderPlaced} />
    </div>
  );
};

export default CheckoutPage;