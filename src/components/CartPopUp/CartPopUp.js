import React from 'react';
import './CartPopUp.scss';
import Button from '../Button/Button';

const CartPopUp = () => {
  return (
    <div className="cartPopUp">
      <div className="popUpTitle">
        <strong>옵션/수량 변경</strong>
        <a href="#!">
          <img
            src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/close_black.svg"
            alt="닫기"
          />
        </a>
      </div>
      <div className="popUpCnt">
        <form name="optionChangeForm" id="optionChangeForm">
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
                      <Button
                        type="button"
                        className="itemSize"
                        fontScale="small"
                        scale="small"
                        color="whiteToBlack"
                      >
                        220
                      </Button>
                      <Button
                        type="button"
                        className="itemSize"
                        fontScale="small"
                        scale="small"
                        color="whiteToBlack"
                      >
                        230
                      </Button>
                      <Button
                        type="button"
                        className="itemSize"
                        fontScale="small"
                        scale="small"
                        color="whiteToBlack"
                      >
                        240
                      </Button>
                      <Button
                        type="button"
                        className="itemSize"
                        fontScale="small"
                        scale="small"
                        color="whiteToBlack"
                      >
                        250
                      </Button>
                      <Button
                        type="button"
                        className="itemSize"
                        fontScale="small"
                        scale="small"
                        color="whiteToBlack"
                      >
                        260
                      </Button>
                      <Button
                        type="button"
                        className="itemSize"
                        fontScale="small"
                        scale="small"
                        color="whiteToBlack"
                      >
                        270
                      </Button>
                      <Button
                        type="button"
                        className="itemSize"
                        fontScale="small"
                        scale="small"
                        color="whiteToBlack"
                      >
                        280
                      </Button>
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
                                  <s />
                                </a>
                              </span>
                              <div>
                                <strong>수량:</strong>
                                <div className="amtBtnDiv">
                                  <Button
                                    type="button"
                                    className="amtMinusBtn"
                                    sort="icon"
                                  >
                                    <img
                                      src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/minus.svg"
                                      alt="minusImg"
                                    />
                                  </Button>
                                  <input
                                    type="text"
                                    className="amtNum"
                                    value="1"
                                  />
                                  <Button
                                    type="button"
                                    className="amtPlusBtn"
                                    sort="icon"
                                  >
                                    <img
                                      src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/plus.svg"
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
              fontScale="large"
              color="whiteAndBlack"
              scale="cartBtn"
            >
              취소
            </Button>
            <Button
              type="button"
              className="changeCartBtn"
              fontScale="large"
              color="blackToYellow"
              scale="cartBtn"
            >
              변경하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartPopUp;
