import React from 'react';
import './OrderLeft.scss';

const Order = () => {
  return (
    <div className="layoutBody">
      <form className="orderFrame">
        <div className="subpageWrap">
          <div className="subContainer">
            <div className="titleContainer">
              <h2 className="orderTitle">
                <span className="designElement">주문/결제</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="orderLayout">
          <div className="wrapLeft">
            <h2 className="orderInfo">
              <span className="productInfo">주문상품 정보</span>
            </h2>
            <div className="product">
              <div className="cartContents">
                <div className="cartItem">
                  <div className="itemInfo">
                    <div className="productContainer">
                      <a href="/productDetail" className="productLink">
                        <img
                          className="productImage"
                          src="images/boots-1.png"
                          alt="1"
                        />
                      </a>
                    </div>
                    <ul>
                      <li>
                        <strong>1461 스무스</strong>
                      </li>
                      <li className="optionArea">
                        <ul className="optionSize">
                          <li>
                            <span className="pdsizeName">사이즈(mm) :</span>
                            <span className="sizeNumber">240</span>
                          </li>
                        </ul>
                        <div className="optionNumber">
                          <div className="optionQuantity">
                            <span className="quanTity">수량: </span>
                            <span className="number">1개</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <ul className="block2">
                    <li className="price">
                      ￦<span className="priceSum">210,000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="orderSubsection">
              <h3 className="disCount">
                <span className="text">할인</span>
              </h3>
              <div className="inputBox">
                <ul className="inputWrap">
                  <li className="firstSelect">
                    <div className="selectBox">
                      <div className="codeDiscount">
                        <input
                          type="text"
                          placeholder="코드할인"
                          className="motionCode"
                        ></input>
                      </div>
                      <span>
                        <button className="btn">입력</button>
                      </span>
                    </div>
                  </li>
                  <li className="secondSelect">
                    <div className="secondBox">
                      <div className="inputFix">
                        <input type="text" className="couponSaletxt"></input>
                      </div>
                      <button className="couponSelect">쿠폰 선택</button>
                    </div>
                  </li>
                </ul>
              </div>
              <h3 className="orderTitle">
                <span className="orderPerson">주문자정보</span>
              </h3>
              <div className="orderInput">
                <ul className="orderWrap">
                  <li className="threeSelect">
                    <div className="nameInput">
                      <div className="nameVid">
                        <input
                          type="text"
                          placeholder="이름"
                          className="name"
                        />
                      </div>
                      <button className="correctionBtn">수정</button>
                    </div>
                  </li>
                  <li className="phoneNumber">
                    <div className="contact">
                      <div className="contactVid">
                        <input
                          type="text"
                          className="numberInput"
                          placeholder="연락처"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
