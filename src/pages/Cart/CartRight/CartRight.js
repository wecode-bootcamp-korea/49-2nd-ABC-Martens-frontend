import React from 'react';
// import { useNavigate } from 'react-router';
import './CartRight.scss';
import Button from '../../../components/Button/Button';

const CartRight = ({ cartList }) => {
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

  // const handleOrderBtn = () => {
  //   if (token) {
  //     //로그인이 되어있으면
  //     navigate('/order');
  //   } else {
  //     //비로그인 상태
  //     navigate('/login');
  //   }
  // };

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
                  <span>{cartDiscountPrice(cartList)}</span>
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
          // handleClick={handleOrderBtn}
        >
          구매하기
        </Button>
      </div>
    </li>
  );
};

export default CartRight;
