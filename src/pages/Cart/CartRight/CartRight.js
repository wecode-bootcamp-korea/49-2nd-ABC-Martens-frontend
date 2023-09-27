import React, { useState, useEffect } from 'react';
import './CartRight.scss';
import Button from '../../../components/Button/Button';

const CartRight = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
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
      });
  }, []);

  let sum = cartList => {
    let sum = 0;
    for (let i of cartList) {
      sum += i.price;
    }

    let cartTotalPrice = sum.toLocaleString('ko-KR');
    return cartTotalPrice;
  };

  if (!cartList) return null;

  return (
    <li className="cartRight">
      <div className="orderWrap">
        <div className="orderContainer">
          <strong className="orderExAmount">주문 예정 금액</strong>
          <div className="sumPriceContainer">
            <div>
              <span>총 상품금액</span>
              <b>
                ￦
                <span className="sumPrice">
                  <span className="num">{sum(cartList)}</span>
                </span>
              </b>
            </div>
            <div>
              <span>총 배송비</span>
              <b>
                ￦
                <span className="sumPrice">
                  <span>0</span>
                </span>
              </b>
            </div>
            <div>
              <span>총 할인</span>
              <s>
                ￦
                <span className="sumPrice">
                  <span>0</span>
                </span>
              </s>
            </div>
            <div>
              <span>총 결제금액</span>
              <strong>
                ￦
                <span className="sumPrice">
                  <span className="num">{sum(cartList)}</span>
                </span>
              </strong>
            </div>
          </div>
        </div>
        <Button
          type="button"
          className="selectItemOrder"
          fontscale="large"
          scale="large"
          color="blackToYellow"
        >
          구매하기
        </Button>
      </div>
    </li>
  );
};

export default CartRight;
