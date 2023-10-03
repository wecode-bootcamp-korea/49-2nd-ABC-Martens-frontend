import React from 'react';
import './CartLeft.scss';
import Checkbox from '../../../components/CheckBox/Checkbox';
import Button from '../../../components/Button/Button';
import CartPopUp from '../../../components/CartPopUp/CartPopUp';
// import { HOST } from '../../../components/Variable/Variable';

const CartLeft = ({
  cartList,
  setCartList,
  selectAll,
  setSelectAll,
  itemCheckboxes,
  setItemCheckboxes,
  selectCartItem,
  setSelectCartItem,
  isPopUp,
  setIsPopUp,
}) => {
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
  const handleItemCheckboxChange = productId => {
    const updatedItemCheckboxes = {
      ...itemCheckboxes,
      [productId]: !itemCheckboxes[productId],
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
    // const updatedItemCheckboxes = { ...itemCheckboxes };

    // for (const key in updatedItemCheckboxes) {
    //   if (updatedItemCheckboxes[key]) {
    //     delete updatedItemCheckboxes[key];

    //     // 기존 객체 찾기
    //     const targetProduct = cartList.find(
    //       item => item.productId === parseInt(key),
    //     );

    //     // 찾은 객체에 isDelete 추가
    //     if (targetProduct) {
    //       targetProduct.isDelete = 'Y';
    //     }
    //   }
    // }
    console.log(cartList);

    for (let i = 0; i < cartList.length; i++) {
      const deleteProductId = cartList[i].productId;

      // 기존 객체 찾기
      const targetProduct = cartList.find(
        item => item.productId === deleteProductId,
      );

      // 찾은 객체에 isDelete 추가
      if (targetProduct) {
        targetProduct.isDelete = 'Y';
      }
    }

    // HOST로 백엔드 API 가져오기 : `${HOST}/carts/${productId}`
    fetch(``, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // authorization: '토큰',
      },
      body: JSON.stringify({
        cartList,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'cart List deleted') {
          setCartList(data);
          alert('장바구니 상품을 삭제하였습니다.');
          // setItemCheckboxes(updatedItemCheckboxes);
        } else {
          alert('에러가 발생하였습니다.');
        }
      });
  };

  // 단일 상품 삭제하기
  const handleItemDelete = productId => {
    // 기존 객체 찾기
    const targetProduct = cartList.find(item => item.productId === productId);

    // 찾은 객체에 isDelete 추가
    if (targetProduct) {
      targetProduct.isDelete = 'Y';
    }

    fetch(``, {
      //`${HOST}/carts/${productId}`
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // authorization: '토큰',
      },
      body: JSON.stringify({
        cartList,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'cart List deleted') {
          setCartList(data);
          alert('장바구니 상품을 삭제하였습니다.');
        } else {
          alert('에러가 발생하였습니다.');
        }
      });
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
          {cartList.length > 0 &&
            cartList.map(cartItem => (
              <li className="shoppingItemList" key={cartItem.productId}>
                <div className="shoppingItemContent">
                  <span className="itemCheck">
                    <Checkbox
                      type="checkbox"
                      id={`btnSelect${cartItem.productId}`}
                      className={`btnSelect${cartItem.productId}`}
                      checked={itemCheckboxes[cartItem.productId] || false}
                      onChange={() =>
                        handleItemCheckboxChange(cartItem.productId)
                      }
                    >
                      선택
                    </Checkbox>
                  </span>
                  <div>
                    <button
                      type="button"
                      className="btnOption"
                      id={cartItem.productId}
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
                      value={cartItem.productId}
                      title="상품삭제"
                      onClick={() => handleItemDelete(cartItem.productId)}
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
                            src={cartItem.productThumbnailImage}
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
                          {cartItem.totalPrice.toLocaleString('ko-KR')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {isPopUp && (
                  <CartPopUp
                    setIsPopUp={setIsPopUp}
                    cartItem={selectCartItem}
                  />
                )}
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};

export default CartLeft;
