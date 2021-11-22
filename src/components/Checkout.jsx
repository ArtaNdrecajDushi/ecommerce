import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';



const Checkout = () => {
  const context = useContext(MyContext);
  const { cartItems, removePasta, totalPerProduct, grandTotal } = context;
  const navigate = useNavigate();

  const lineTotals = totalPerProduct(cartItems);
  const grandTotalAll = grandTotal(cartItems);

  if (cartItems.length === 0)
    return (
      <main>
        <section className='cart-no-items'>
          <p>There are no items in your cart to order</p>
          <button onClick={() => navigate('/products')}>Return</button>
        </section>
      </main>
    );

  const pastaList = cartItems.map((pastaData, index) => {
    return (
      <aside key={pastaData.id} className='cart-line'>
        <img src={pastaData.image} alt={pastaData.name} />
        <aside className='cart-text'>
          <h5>{pastaData.title}</h5>
          <p>
            Quantity <span>{pastaData.quantity}</span>
          </p>
          <p>€{pastaData.price.toFixed(2)}</p>
          <h4>Line Total {lineTotals[index].toFixed(2)}</h4>
        </aside>
        <button
          className='remove-button'
          onClick={() => removePasta(pastaData)}>
          Remove pasta
        </button>
      </aside>
    );
  });

  return (
    <main>
      
      <section className="cart-page background-image">
        {pastaList}
        <aside className='checkout-aside'>
          <h4>Shipping free</h4>
          <p>
            Grand Total <span>€{grandTotalAll.toFixed(2)}</span>
          </p>
          <Link to='/orderPlaced'>
            <button className="place-order">Place your order</button>
          </Link>
          <button onClick={() => navigate('/products')}>Return</button>
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
