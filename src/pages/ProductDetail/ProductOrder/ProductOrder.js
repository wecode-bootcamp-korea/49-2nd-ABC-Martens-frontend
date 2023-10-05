import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import './ProductOrder.scss';

const ProductOrder = ({ productList }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const newArray = productList.options.map(option => {
    return { quantity: option.quantity, size: option.size };
  });

  return (
    <div className="productOrder">
      <form className="goodform">
        <div className="listTop">
          <strong className="name">{productList.productName}</strong>
          <div className="color">
            <strong className="colorList">색상 :</strong>
            <span>
              {productList.colorSelector[0].colorName} /
              {productList.colorSelector[0].color_id}
            </span>
          </div>
        </div>
        <div className="shoesImg">
          <img
            className="shoes"
            src="https://i.postimg.cc/q7sdqxS7/boots-1.jpg"
            alt="신발 이미지"
          />
        </div>
        <div className="productPrice">
          <span className="productCost">상품 금액</span>
          <div>
            <b>{productList.salesPricePercentage}%</b>
            <s>
              ￦ {parseInt(productList.orignialPrice).toLocaleString('ko-KR')}
            </s>
            <span>
              ￦
              <span className="num">
                {parseInt(productList.price).toLocaleString('ko-KR')}
              </span>
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
                  {newArray.map(size => {
                    let color;
                    if (size.size === selectedSize) {
                      color = 'yellowToBlack';
                    } else {
                      color = 'whiteToBlack';
                    }
                    return (
                      <Button
                        key={size.size}
                        type="button"
                        className="btn"
                        fontscale="small"
                        scale="small"
                        color={color}
                        disabled={size.quantity === 0}
                        handleClick={() => {
                          setSelectedSize(size.size);
                        }}
                      >
                        {size.size}
                      </Button>
                    );
                  })}
                </div>
                {selectedSize && (
                  <div className="quantityContainer">
                    <div className="quantityTable">
                      <div className="quantityOtp">
                        <span className="sizeInch">
                          사이즈(mm) : {selectedSize}
                          <div onClick={() => setSelectedSize(null)}>
                            <img
                              src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/close_black.svg"
                              alt="x"
                            />
                          </div>
                        </span>
                        <div className="quanTity_1">
                          <span className="quantity_Content">수량 :</span>
                          <div className="amtBtnDiv">
                            <Button
                              type="button"
                              className="amtMinusBtn"
                              sort="icon"
                              handleClick={() => {
                                selectedQuantity > 1
                                  ? setSelectedQuantity(selectedQuantity - 1)
                                  : alert('1개보다 적을 수 없습니다.');
                              }}
                            >
                              <img
                                src="https://i.postimg.cc/C1G1s7YH/minus.png"
                                alt="minusImg"
                              />
                            </Button>
                            <div className="amtNum">{selectedQuantity}</div>
                            <Button
                              type="button"
                              className="amtPlusBtn"
                              sort="icon"
                              handleClick={() => {
                                setSelectedQuantity(selectedQuantity + 1);
                              }}
                            >
                              <img
                                src="https://i.postimg.cc/PrtLKgCL/plus.png"
                                alt="minusImg"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="sizeFine">
                  <p>10초안에 내 사이즈 찾기</p>
                </div>
                <div className="totalContainer">
                  <div className="totalPrice">
                    <span className="totalProduct">
                      총 상품 금액{' '}
                      <b>
                        ￦
                        <span>
                          {selectedSize
                            ? (
                                parseInt(productList.price) * selectedQuantity
                              ).toLocaleString('ko-KR')
                            : 0}
                        </span>
                      </b>
                    </span>
                  </div>
                </div>
                <div className="pdBtns_area1">
                  <div className="pdpBtn">
                    <Link to="/cart">
                      <button type="button" className="cart">
                        장바구니
                      </button>
                    </Link>
                    <Link to="/order">
                      <button type="button" className="buy">
                        구매하기
                      </button>
                    </Link>
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
