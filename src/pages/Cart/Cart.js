import React, { useState, useEffect } from 'react';
import CartLeft from './CartLeft/CartLeft';
import CartRight from './CartRight/CartRight';
import { TOKEN, HOST } from '../../components/Variable/Variable';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState();
  const [itemCheckboxes, setItemCheckboxes] = useState({});
  const [isPopUp, setIsPopUp] = useState(false);

  const getCartData = () => {
    fetch(`${HOST}/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 400) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(resData => {
        // 객체형태의 응답데이터를 구조분해할당으로 바꾸기
        const { data } = resData;
        setCartList(data);
        const updatedItemCheckboxes = {};
        for (let i = 0; i < data.length; i++) {
          updatedItemCheckboxes[data[i].productOptionId] = false;
        }
        setItemCheckboxes(updatedItemCheckboxes);
      });
  };

  useEffect(() => {
    getCartData();
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
              itemCheckboxes={itemCheckboxes}
              setItemCheckboxes={setItemCheckboxes}
              isPopUp={isPopUp}
              setIsPopUp={setIsPopUp}
              getCartData={getCartData}
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
