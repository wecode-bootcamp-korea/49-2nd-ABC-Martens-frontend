import React from 'react';
import './CartRight.scss';
import Button from '../../../components/Button/Button';

const CartRight = () => {
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
                  <span className="num">230,000</span>
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
                  <span className="num">230,000</span>
                </span>
              </strong>
            </div>
          </div>
        </div>
        <Button
          type="button"
          className="selectItemOrder"
          fontScale="large"
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
