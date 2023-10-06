import React, { useState } from 'react';
import Checkbox from '../../../components/CheckBox/Checkbox';
import Button from '../../../components/Button/Button';
import CartPopUp from '../../../components/CartPopUp/CartPopUp';
import { TOKEN, HOST } from '../../../components/Variable/Variable';
import './CartLeft.scss';

const CartLeft = ({
  cartList,
  itemCheckboxes,
  setItemCheckboxes,
  isPopUp,
  setIsPopUp,
  getCartData,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectCartItem, setSelectCartItem] = useState({});

  // 체크박스 전체 선택/ 취소
  const handleCheckAll = () => {
    setSelectAll(!selectAll);
    const updatedItemCheckboxes = {};
    for (const key in itemCheckboxes) {
      updatedItemCheckboxes[key] = !selectAll;
    }
    setItemCheckboxes(updatedItemCheckboxes);
  };

  // 체크박스 개별 선택/ 취소
  const handleItemCheckboxChange = productOptionId => {
    const updatedItemCheckboxes = {
      ...itemCheckboxes,
      [productOptionId]: !itemCheckboxes[productOptionId],
    };
    setItemCheckboxes(updatedItemCheckboxes);

    // 모든 개별 상품 checkbox가 선택되었는지 확인
    const allItemsSelected = Object.values(updatedItemCheckboxes).every(
      value => value,
    );
    setSelectAll(allItemsSelected);
  };

  // 여러 상품 삭제하기
  const handleCheckItemsDelete = () => {
    const productList = [];

    for (const key in itemCheckboxes) {
      if (itemCheckboxes[key]) {
        const targetProduct = cartList.find(
          item => item.productOptionId === parseInt(key),
        );

        const {
          productId,
          size,
          quantity,
          color,
          isDeleted = 'Y',
        } = targetProduct;

        productList.push({
          productId,
          size,
          quantity,
          color,
          isDeleted,
        });
      }
    }

    fetch(`${HOST}/carts`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
      body: JSON.stringify({
        productList,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('장바구니 상품을 삭제하였습니다.');
          getCartData();
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error));
  };

  // 단일 상품 삭제하기
  const handleItemDelete = productOption => {
    // 기존 객체 찾기
    const targetProduct = cartList.find(
      item => item.productOptionId === productOption.productOptionId,
    );

    // 찾은 객체에 isDeleted 추가
    if (targetProduct) {
      targetProduct.isDeleted = 'Y';
    }

    const [arr] = cartList.filter(
      data => data.productOptionId === productOption.productOptionId,
    );

    fetch(`${HOST}/carts/${arr.productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
      body: JSON.stringify({
        size: targetProduct.size,
        quantity: targetProduct.quantity,
        color: targetProduct.color,
        isDeleted: targetProduct.isDeleted,
      }),
    })
      .then(response => {
        if (response.ok) {
          alert('장바구니 상품을 삭제하였습니다.');
          getCartData();
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error));
  };

  return (
    <li className="cartLeft">
      <div className="cartContents">
        <div className="cartCheckDiv">
          <span className="cartCheck">
            <Checkbox
              type="checkbox"
              id="btnSelectAll"
              className="btnSelectAll"
              checked={selectAll}
              onChange={handleCheckAll}
            >
              전체선택
            </Checkbox>
          </span>
          <Button
            type="button"
            className="btnDeleteAll"
            fontscale="small"
            scale="middle"
            color="whiteAndBlack"
            handleClick={handleCheckItemsDelete}
          >
            선택 삭제
          </Button>
        </div>
      </div>
      <div className="cartList">
        <ul className="shoppingList">
          {cartList && cartList.length > 0 ? (
            cartList.map(cartItem => (
              <li className="shoppingItemList" key={cartItem.cartId}>
                <div className="shoppingItemContent">
                  <span className="itemCheck">
                    <Checkbox
                      type="checkbox"
                      id={`btnSelect${cartItem.productOptionId}`}
                      className={`btnSelect${cartItem.productOptionId}`}
                      checked={
                        itemCheckboxes[cartItem.productOptionId] || false
                      }
                      onChange={() =>
                        handleItemCheckboxChange(cartItem.productOptionId)
                      }
                    >
                      선택
                    </Checkbox>
                  </span>
                  <div>
                    <button
                      type="button"
                      className="btnOption"
                      id={cartItem.productOptionId}
                      onClick={() => {
                        setIsPopUp(true);
                        setSelectCartItem(cartItem);
                      }}
                    >
                      옵션/수량변경
                    </button>
                    <button
                      type="button"
                      className="btnDelete"
                      value={cartItem.productOptionId}
                      title="상품삭제"
                      onClick={() => handleItemDelete(cartItem)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
                <div className="itemDetail">
                  <div className="itemInfo">
                    <div className="itemInfoDiv">
                      <div>
                        <a href="#!">
                          <img
                            src={cartItem.productThumbnail}
                            alt="제품사진"
                            className="itemImg"
                          />
                        </a>
                      </div>
                      <ul>
                        <li>
                          <strong>{cartItem.productName}</strong>
                        </li>
                        <li className="optionArea">
                          <ul className="optionSize">
                            <li>
                              <span className="itemSizeText">사이즈(mm) :</span>
                              <span className="itemSizeMm">
                                {cartItem.size}
                              </span>
                            </li>
                          </ul>
                          <div className="optionQuantity">
                            <div>
                              <span className="itemQuantityText">수량 :</span>
                              <span className="itemQuantity">
                                {cartItem.quantity}개
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <ul className="itemPriceBox">
                      <li className="itemPrice">
                        ￦
                        <span className="totalPrice">
                          {parseInt(cartItem.totalPrice).toLocaleString(
                            'ko-KR',
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {isPopUp && (
                  <CartPopUp
                    setIsPopUp={setIsPopUp}
                    cartItem={selectCartItem}
                    getCartData={getCartData}
                  />
                )}
              </li>
            ))
          ) : (
            // 카트리스트가 없을 때
            <li className="shoppingItemList">
              <div className="shoppingItemContent">
                <span className="itemCheck">
                  <Checkbox
                    type="checkbox"
                    id="btnSelect"
                    className="btnSelect"
                  >
                    선택
                  </Checkbox>
                </span>
                <div>
                  <button type="button" className="btnOption">
                    옵션/수량변경
                  </button>
                  <button type="button" className="btnDelete">
                    삭제
                  </button>
                </div>
              </div>
              <div className="noItem">장바구니에 담긴 상품이 없습니다.</div>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default CartLeft;
