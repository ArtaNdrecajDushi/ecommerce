import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';

const OrderPlaced = () => {
  const context = useContext(MyContext);
  const { setCartItems } = context;
  const navigate = useNavigate();

  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <main>
      <section className='orders-placed background-image'>
        <p className="order-placed-button">Order Placed</p>
        <button className="carry-on-shopping-button" onClick={() => navigate('/products', { replace: true })}>
          Carry on shopping
        </button>
      </section>
    </main>
  );
};

export default OrderPlaced;
