import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Basket from '../components/Basket';
import { BasketItem } from '../models/BasketItem';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const navigate = useNavigate();

  const addToBasket = (item: BasketItem) => {
    setBasket(prev => [...prev, item]);
  };

  const handleCheckoutClick = () => {
    navigate('/checkout', { state: { basket } });
  };

  return (
    <div className='container'>
      <ProductList addToBasket={addToBasket} />
      <Basket basket={basket} />
      <button onClick={handleCheckoutClick}>Go to Checkout</button>
    </div>
  );
};

export default HomePage;