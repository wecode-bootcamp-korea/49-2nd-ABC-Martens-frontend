import React from 'react';
import './Cart.scss';
import CartLeft from './CartLeft/CartLeft';
import CartRight from './CartRight/CartRight';

const Cart = () => {
  return (
    <div className="cart">
      <div className="titleContainer">
        <h2>장바구니</h2>
      </div>
      <form className="cartForm" name="cartForm">
        <ul className="cartWrap">
          <CartLeft />
          <CartRight />
        </ul>
      </form>
    </div>
  );
};

export default Cart;
