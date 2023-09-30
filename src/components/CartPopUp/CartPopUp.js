import React, { useState } from 'react';
import './CartPopUp.scss';
import Button from '../Button/Button';

const CartPopUp = ({ setIsPopUp, cartItem }) => {
  // 백엔드에서 API호출로 사이즈 값 받아오기
  const sizeList = [220, 230, 240, 250, 260, 270];

  const [selectSize, setSelectSize] = useState(cartItem?.size);
  const [selectQuantity, setSelectQuantity] = useState(cartItem?.quantity);

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
        {/*아래 div -> 기존 form이었다가 react error로 form 태그 중복떠서 div로 변경함 */}
        <div name="optionChangeForm" id="optionChangeForm">
          <div className="cartItemDiv">
            <div className="cartItemBox">
              <div className="cartItemCnt">
                <div>
                  <a href="#!">
                    <img
                      src="https://i.postimg.cc/q7sdqxS7/boots-1.jpg"
                      alt="boots"
                      className="itemImg"
                    />
                  </a>
                </div>
                <ul>
                  <li>
                    <strong>1461 모노</strong>
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
                                <b>사이즈(mm) : 260</b>
                                <a href="#!">
                                  <img
                                    src="https://i.postimg.cc/zXjzB3Xv/close-150192-1280.png"
                                    alt="close"
                                  />
                                </a>
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
                                  {selectQuantity}
                                  {/* <input
                                    type="text"
                                    className="amtNum"
                                    defaultValue={selectQuantity}
                                  /> */}
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
                                    ￦ 190,000
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
            >
              취소
            </Button>
            <Button
              type="button"
              className="changeCartBtn"
              fontscale="large"
              color="blackToYellow"
              scale="cartBtn"
              // handleClick={()=> {
              //   //API (selectSize, selectQuantity 값 보내주기)
              // 저장된 값을 cartList에 보내기?
              // }}
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
