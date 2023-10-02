import React, { useState } from 'react';
import './ProductOrder.scss';

const SIZES = [220, 230, 240, 250, 260, 270, 280, 290];

const ProductOrder = () => {
  const [selectedSize, setSelectedSize] = useState();

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
                  {SIZES.map(size => (
                    <button
                      key={size}
                      className="btn"
                      type="button"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className="quantityContainer">
                  <div className="quantityTable">
                    <div className="quantityOtp">
                      {selectedSize && (
                        <span className="sizeInch">
                          사이즈(mm) : {selectedSize}
                          <a>
                            <img src="images/x-cross.png" alt="x-icon"></img>
                          </a>
                        </span>
                      )}
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
                    <a href="/Cart">
                      <button type="button" className="cart">
                        장바구니
                      </button>
                    </a>
                    <a href="/Payment">
                      <button type="button" className="buy">
                        구매하기
                      </button>
                    </a>
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
