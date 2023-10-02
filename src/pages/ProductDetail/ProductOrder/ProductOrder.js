import React from 'react';
import './ProductOrder.scss';

const ProductOrder = () => {
  const handleButtonClick = () => {
    const linkUrl = 'localhost3000/Order';
    window.location.href = linkUrl;
  };
  const handleButtonClick_1 = () => {
    const linkUrl = 'localhost3000/Payment';
    window.location.href = linkUrl;
  };

  return (
    <div className="productOrderlist">
      <form className="goodform">
        <div className="listTop">
          <storng className="name">Brown Shoes</storng>
          <div className="color">
            <strong className="colorList">색상 :</strong>
            <span>Brown / 000000</span>
          </div>
        </div>
        <div className="shoesImg">
          <img className="shoes" src="images/boots-1.jpg" alt="신발 이미지" />
        </div>
        <div className="productPrice">
          <span className="productCost">상품 금액</span>
          <div className="totalPrice">
            <span className="won">
              ￦<span className="num">300,000</span>
            </span>
          </div>
        </div>
        <div className="buySection">
          <div className="entireSection">
            <div className="sizeGuidesection">
              <strong className="size">사이즈(mm)</strong>
              <div className="sizeList">
                <span className="sizeGuide">사이즈 가이드</span>
              </div>
            </div>
            <div className="sizeOption">
              <div className="optionTable">
                <div className="tableWrap">
                  <button className="btn" type="button">
                    220
                  </button>
                  <button className="btn" type="button">
                    230
                  </button>
                  <button className="btn" type="button">
                    240
                  </button>
                  <button className="btn" type="button">
                    250
                  </button>
                  <button className="btn" type="button">
                    260
                  </button>
                  <button className="btn" type="button">
                    270
                  </button>
                  <button className="btn" type="button">
                    280
                  </button>
                  <button className="btn" type="button">
                    290
                  </button>
                </div>
                <div className="quantityContainer">
                  <div className="quantityTable">
                    <div className="quantityOtp">
                      <span className="sizeInch">사이즈(mm) : </span>
                      <div className="quanTity_1">
                        <span className="quantity_Content">수량:</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sizeFine">
                  <p>10초안에 내 사이즈 찾기</p>
                </div>
                <div className="totalContainer">
                  <div className="totalPrice">
                    <span className="quanTity">수량 :</span>
                    <span className="totalProduct">총 상품 금액 ￦ 0</span>
                  </div>
                </div>
                <div className="pdBtns_area1">
                  <div className="pdpBtn">
                    <button
                      type="button"
                      className="cart"
                      onClick={handleButtonClick}
                    >
                      장바구니
                    </button>
                    <button
                      type="button"
                      className="buy"
                      onClick={handleButtonClick_1}
                    >
                      구매하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductOrder;
