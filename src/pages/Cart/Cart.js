import React, { useState } from 'react';
import './Cart.scss';
import CartLeft from './CartLeft/CartLeft';
import CartRight from './CartRight/CartRight';

const Cart = () => {
  const [isPopUp, setIsPopUp] = useState(false);

  return (
    <>
      <div className="cart">
        <div className="titleContainer">
          <h2>장바구니</h2>
        </div>
        <form className="cartForm" name="cartForm">
          <ul className="cartWrap">
            <CartLeft isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
            <CartRight />
          </ul>
        </form>
      </div>
      {isPopUp && <div className="modalBackground" />}
    </>
  );
};

export default Cart;
