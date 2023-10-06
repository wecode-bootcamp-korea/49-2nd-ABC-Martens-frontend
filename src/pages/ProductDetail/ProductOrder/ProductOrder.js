import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { HOST, TOKEN } from '../../../components/Variable/Variable';
import './ProductOrder.scss';

const ProductOrder = ({ productInfo }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const [itemList, setItemList] = useState([]);

  const navigate = useNavigate();
  const totalPrice = (parseInt(productInfo.price) * selectedQuantity).toString;

  const handleCart = () => {
    const item = {
      productId: productInfo.productId,
      productName: productInfo.productName,
      productThumbnail: productInfo.thumbnailImageUrl,
      totalPrice: totalPrice,
      salePercentage: productInfo.salesPricePercentage,
      price: productInfo.price,
      size: selectedSize,
      color: productInfo.colorSelector[0].colorName,
      quantity: selectedQuantity,
    };
    setItemList([...itemList, item]);

    fetch(`${HOST}/carts/${productInfo.productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
      body: JSON.stringify({
        itemList,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('장바구니에 상품을 담았습니다.');
          navigate('/cart');
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error));
  };

  const newArray = productInfo.options.map(option => {
    return { quantity: option.quantity, size: option.size };
  });

  return (
    <div className="productOrder">
      <form className="goodform">
        <div className="listTop">
          <strong className="name">{productInfo.productName}</strong>
          <div className="color">
            <strong className="colorList">색상 :</strong>
            <span>
              {productInfo.colorSelector[0].colorName} /
              {productInfo.colorSelector[0].color_id}
            </span>
          </div>
        </div>
        <div className="shoesImg">
          <img
            className="shoes"
            src={productInfo.thumbnailImageUrl}
            alt="신발 이미지"
          />
        </div>
        <div className="productPrice">
          <span className="productCost">상품 금액</span>
          <div>
            <b>{productInfo.salesPricePercentage}%</b>
            <s>
              ￦ {parseInt(productInfo.orignialPrice).toLocaleString('ko-KR')}
            </s>
            <span>
              ￦
              <span className="num">
                {parseInt(productInfo.price).toLocaleString('ko-KR')}
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

                    let displayText;
                    if (size.quantity === 0) {
                      displayText = `${size.size} (품절)`;
                    } else {
                      displayText = size.size;
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
                        {displayText}
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
                          <div
                            onClick={() => {
                              setSelectedSize(null);
                              setSelectedQuantity(1);
                            }}
                          >
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
                                parseInt(productInfo.price) * selectedQuantity
                              ).toLocaleString('ko-KR')
                            : 0}
                        </span>
                      </b>
                    </span>
                  </div>
                </div>
                <div className="pdBtns_area1">
                  <div className="pdpBtn">
                    <button
                      type="button"
                      className="cart"
                      onClick={() => handleCart()}
                    >
                      장바구니
                    </button>
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
