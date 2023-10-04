import React, { useState, useEffect } from 'react';
import './Cart.scss';
import CartLeft from './CartLeft/CartLeft';
import CartRight from './CartRight/CartRight';
import { TOKEN, HOST } from '../../components/Variable/Variable';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [itemCheckboxes, setItemCheckboxes] = useState({});
  const [isPopUp, setIsPopUp] = useState(false);
  // const [render, setRender] = useState(true);

  // const handleRender = () => {// 의존성 배열에 render를 넣고, 팝업창에서 cartList가 바뀌면 리렌더링
  //   setRender(!render);
  // };

  useEffect(() => {
    fetch(`${HOST}/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(resData => {
        console.log(resData);
        const { data } = resData;
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
