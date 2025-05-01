import React from 'react';
import { BasketItem } from '../models/BasketItem';

interface BasketProps {
  basket: BasketItem[];
}

const Basket: React.FC<BasketProps> = ({ basket }) => {
  return (
    <div className='container'>
      <h2>Basket</h2>
      {basket.map(item => (
        <div className='card' key={item.product.id}>
          {item.product.name} - Qty: {item.quantity}
        </div>
      ))}
    </div>
  );
};

export default Basket;