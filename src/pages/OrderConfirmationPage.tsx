import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Order } from '../models/Order';
import ShippingSlip from '../components/ShippingSlip';

const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order as Order | undefined;

  if (!order || !order.items) {
    return <div><strong>Error:</strong> Order data not available.</div>;
  }
  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className='container'>
      <ShippingSlip order={order} />
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
