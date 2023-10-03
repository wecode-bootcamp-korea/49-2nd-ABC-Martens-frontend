import React, { useState, useEffect } from 'react';
import './Cart.scss';
import CartLeft from './CartLeft/CartLeft';
import CartRight from './CartRight/CartRight';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [itemCheckboxes, setItemCheckboxes] = useState({});
  const [isPopUp, setIsPopUp] = useState(false);

  // cart list 불러오기
  useEffect(() => {
    // HOST로 백엔드 API 가져오기 :`${HOST}/carts`
    fetch('/data/cartList.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // authorization: '토큰',
      },
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        setCartList(data);
        const updatedItemCheckboxes = {};
        for (let i = 0; i < data.length; i++) {
          updatedItemCheckboxes[data[i].productId] = false;
        }
        setItemCheckboxes(updatedItemCheckboxes);
      });
  }, []);

  return (
    <>
      <div className="cart">
        <div className="titleContainer">
          <h2>장바구니</h2>
        </div>
        <form className="cartForm" name="cartForm">
          <ul className="cartWrap">
            <CartLeft
              cartList={cartList}
              setCartList={setCartList}
              itemCheckboxes={itemCheckboxes}
              setItemCheckboxes={setItemCheckboxes}
              isPopUp={isPopUp}
              setIsPopUp={setIsPopUp}
            />
            <CartRight cartList={cartList} setCartList={setCartList} />
          </ul>
        </form>
      </div>
      {isPopUp && <div className="modalBackground" />}
    </>
  );
};

export default Cart;
