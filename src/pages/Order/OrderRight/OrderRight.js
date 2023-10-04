import React, { useState, useEffect } from 'react';
import './OrderRight.scss';

const OrderRight = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    // HOST로 백엔드 API 가져오기
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
      sum += i.totalPrice;
    }

    let cartTotalPrice = sum.toLocaleString('ko-KR');
    return cartTotalPrice;
  };

  let cartDiscountPrice = cartList => {
    let discountRate = 0.7;
    let notDiscountPrice = 0;
    let discountPrice = 0;
    let cartDiscountTotalPrice = 0;

    for (let i of cartList) {
      notDiscountPrice += (i.price / discountRate) * i.quantity;
      discountPrice += i.price * i.quantity;
      cartDiscountTotalPrice = notDiscountPrice - discountPrice;
    }

    let cartTotalPrice = cartDiscountTotalPrice.toLocaleString('ko-KR');
    return cartTotalPrice;
  };

  if (!cartList) return null;

  return (
    <li className="orderRight">
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
              <span>배송비</span>
              <b>
                ￦ (+)
                <span className="sumPrice">
                  <span>0</span>
                </span>
              </b>
            </div>
            <div>
              <span>할인금액</span>
              <s>
                ￦ (-)
                <span className="sumPrice">
                  <span>{cartDiscountPrice(cartList)}</span>
                </span>
              </s>
            </div>
            <div>
              <span>총 결제 예정 금액</span>
              <strong>
                ￦
                <span className="sumPrice">
                  <span className="num">{sum(cartList)}</span>
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <h3 className="agreeTitle">
        <span className="term">약관 동의</span>
      </h3>
      <div className="agreeArea">
        <div className="area">
          <div className="allAgree">
            <span className="checkAll">
              <label htmlFor="allAgree">
                <input
                  type="checkbox"
                  name="allAgree"
                  id="allAgree"
                  value="Y"
                />
                <span>전체 동의</span>
              </label>
            </span>
          </div>
          <div className="partAgree">
            <ul className="agreeList">
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
        </div>
      </div>
      <div>4</div>
    </li>
  );
};

export default OrderRight;
