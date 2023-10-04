import React, { useState } from 'react';
import './CartLeft.scss';
import Checkbox from '../../../components/CheckBox/Checkbox';
import Button from '../../../components/Button/Button';
import CartPopUp from '../../../components/CartPopUp/CartPopUp';
import { TOKEN, HOST } from '../../../components/Variable/Variable';

const CartLeft = ({
  cartList,
  setCartList,
  itemCheckboxes,
  setItemCheckboxes,
  isPopUp,
  setIsPopUp,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectCartItem, setSelectCartItem] = useState([]);

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
  // const handleCheckItemsDelete = () => {
  //   const updatedItemCheckboxes = { ...itemCheckboxes };

  //   for (const key in updatedItemCheckboxes) {
  //     if (updatedItemCheckboxes[key]) {
  //       const targetProduct = cartList.find(
  //         item => item.productOptionId === parseInt[key],
  //       );

  //       if (targetProduct) {
  //         targetProduct.isDeleted = 'Y';

  //         const postData = {
  //           ...cartList[targetProduct],
  //           isDeleted: 'Y',
  //         };
  //         console.log(postData);
  //       }
  //     }
  //   }

  //   const updatedItemCheckboxesAfterDelete = {};
  //   for (let i = 0; i < cartList.length; i++) {
  //     updatedItemCheckboxesAfterDelete[cartList[i].productOptionId] = false;
  //   }

  //   setItemCheckboxes(updatedItemCheckboxesAfterDelete);

  //   fetch(`http://10.58.52.107:8000/carts/${1}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxfSwiaWF0IjoxNjk1NTcwOTEyLCJleHAiOjE2OTgxNjI5MTJ9.LXd5rq9hV7qwsaRweBGBGhavJasZJdndEpptccaUi0E',
  //     },
  //     body: JSON.stringify({
  //       cartList,
  //     }),
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       throw new Error('에러 발생!');
  //     })
  //     .catch(error => console.log(error))
  //     .then(data => {
  //       if (data.message === 'cart List deleted') {
  //         alert('장바구니 상품을 삭제하였습니다.');
  //       }
  //     });
  // };

  // 단일 상품 삭제하기
  const handleItemDelete = productOption => {
    // 기존 객체 찾기
    const targetProduct = cartList.find(
      item => item.productOptionId === productOption.productOptionId,
    );

    // 찾은 객체에 isDeleted 추가
    if (targetProduct) {
      targetProduct.isDeleted = 'Y';

      const postData = {
        ...cartList[targetProduct],
        isDeleted: 'Y',
      };
      console.log(postData);
    }

    // 삭제된 상품에 대한 체크박스 초기화
    const updatedItemCheckboxesAfterDelete = {};
    for (let i = 0; i < cartList.length; i++) {
      updatedItemCheckboxesAfterDelete[cartList[i].productOptionId] = false;
    }

    setItemCheckboxes(updatedItemCheckboxesAfterDelete);

    const [arr] = cartList.filter(
      data => data.productOptionId === productOption.productOptionId,
    );

    console.log(arr.productId);

    fetch(`${HOST}/carts/${arr.productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
      body: JSON.stringify({
        cartList,
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
        console.log(data);
        if (data.message === 'cart List deleted') {
          alert('장바구니 상품을 삭제하였습니다.');
        }
      });
  };

  // 여러 상품 삭제하기
  const deleteSelectItem = () => {
    selectCartItem.forEach(item => handleItemDelete(item));
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
            handleClick={deleteSelectItem}
          >
            선택 삭제
          </Button>
        </div>
      </div>
      <div className="cartList">
        <ul className="shoppingList">
          {cartList.length > 0 &&
            cartList.map(cartItem => (
              <li className="shoppingItemList" key={cartItem.productOptionId}>
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
