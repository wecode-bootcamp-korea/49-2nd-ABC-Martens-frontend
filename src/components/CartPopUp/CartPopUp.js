import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './CartPopUp.scss';

const CartPopUp = ({ setIsPopUp, cartItem, setCartList }) => {
  // 백엔드에서 API호출로 사이즈 값 받아오기
  const sizeList = [220, 230, 240, 250, 260, 270];

  const [selectSize, setSelectSize] = useState(cartItem?.size);
  const [selectQuantity, setSelectQuantity] = useState(cartItem?.quantity);

  const handleChangeItem = (selectSize, selectQuantity, color) => {
    const updatedCartItem = {
      ...cartItem,
      size: selectSize,
      quantity: selectQuantity,
      color,
    };

    fetch(``, {
      //`${HOST}/carts/${productId}`
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // authorization: '토큰',
      },
      body: JSON.stringify({
        updatedCartItem,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'cart List created') {
          alert('장바구니 상품을 변경하였습니다.');
          setIsPopUp(false);
        }
      });
  };

  return (
    <div className="cartPopUp">
      <div className="popUpTitle">
        <strong>옵션/수량 변경</strong>
        <div
          onClick={() => {
            setIsPopUp(false);
          }}
        >
          <img
            src="https://i.postimg.cc/zXjzB3Xv/close-150192-1280.png"
            alt="close"
          />
        </div>
      </div>
      <div className="popUpCnt">
        <div name="optionChangeForm" id="optionChangeForm">
          <div className="cartItemDiv">
            <div className="cartItemBox">
              <div className="cartItemCnt">
                <div>
                  <Link to="{() => false}">
                    <img
                      src="https://i.postimg.cc/q7sdqxS7/boots-1.jpg"
                      alt="boots"
                      className="itemImg"
                    />
                  </Link>
                </div>
                <ul>
                  <li>
                    <strong>{cartItem.productName}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="cartItemOptionDiv">
            <div className="cartItemSizeText">
              <strong>사이즈(mm)</strong>
            </div>
            <div className="cartItemSizeOption">
              <div className="selectOptionLayout">
                <div className="itemOptionArea">
                  <div className="itemOptionTable">
                    <div className="optionWrap">
                      {sizeList.map(size => {
                        let color;
                        if (size === selectSize) {
                          color = 'yellowToBlack';
                        } else {
                          color = 'whiteToBlack';
                        }
                        return (
                          <Button
                            key={size}
                            type="button"
                            className="itemSize"
                            fontscale="small"
                            scale="small"
                            color={color}
                            handleClick={() => {
                              setSelectSize(size);
                            }}
                          >
                            {size}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="itemQuantityTableContainer">
                    <table className="itemQuantityTable">
                      <tbody>
                        <tr>
                          <td>
                            <div className="optionDiv">
                              <span>
                                <b>사이즈(mm) : {selectSize}</b>
                                <Link to={() => false}>
                                  <img
                                    src="https://i.postimg.cc/zXjzB3Xv/close-150192-1280.png"
                                    alt="close"
                                    onClick={() =>
                                      alert(
                                        '더이상 선택된 옵션을 삭제할 수 없습니다.',
                                      )
                                    }
                                  />
                                </Link>
                              </span>
                              <div>
                                <strong>수량:</strong>
                                <div className="amtBtnDiv">
                                  <Button
                                    type="button"
                                    className="amtMinusBtn"
                                    sort="icon"
                                    handleClick={() => {
                                      setSelectQuantity(selectQuantity - 1);
                                    }}
                                  >
                                    <img
                                      src="https://i.postimg.cc/C1G1s7YH/minus.png"
                                      alt="minusImg"
                                    />
                                  </Button>
                                  <div className="amtNum">{selectQuantity}</div>
                                  <Button
                                    type="button"
                                    className="amtPlusBtn"
                                    sort="icon"
                                    handleClick={() => {
                                      setSelectQuantity(selectQuantity + 1);
                                    }}
                                  >
                                    <img
                                      src="https://i.postimg.cc/PrtLKgCL/plus.png"
                                      alt="minusImg"
                                    />
                                  </Button>
                                </div>
                                <div className="amtPriceContainer">
                                  <strong className="amtPrice">
                                    ￦
                                    {(
                                      selectQuantity * cartItem.price
                                    ).toLocaleString('ko-KR')}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btnWrap">
            <Button
              className="cancelBtn"
              fontscale="large"
              color="whiteAndBlack"
              scale="cartBtn"
              handleClick={() => {
                setIsPopUp(false);
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              className="changeCartBtn"
              fontscale="large"
              color="blackToYellow"
              scale="cartBtn"
              handleClick={() =>
                handleChangeItem(selectSize, selectQuantity, cartItem.color)
              }
            >
              변경하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
