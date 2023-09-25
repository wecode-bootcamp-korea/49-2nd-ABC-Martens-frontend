import React, { useState, useEffect } from 'react';
import './CartLeft.scss';
import Checkbox from '../../../components/CheckBox/Checkbox';
import Button from '../../../components/Button/Button';
// import CartPopUp from '../../../components/CartPopUp/CartPopUp';

const CartLeft = () => {
  const [cartList, setCartList] = useState([]);

  const [selectAll, setSelectAll] = useState(false);

  const [itemCheckboxes, setItemCheckboxes] = useState({
    //mockdata 받으면 코드 수정하기
    productId: false,
  });

  useEffect(() => {
    fetch('/data/cartList.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // authorization: '토큰',
      },
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        // console.log(data);
        // console.log(data[0].productId);
        // console.log(data[0].productName);
        setCartList(data);
      });
  }, []);

  console.log(cartList);
  console.log(cartList[0]);
  console.log(cartList[1]);

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
  const handleItemCheckboxChange = itemName => {
    const updatedItemCheckboxes = {
      ...itemCheckboxes,
      [itemName]: !itemCheckboxes[itemName],
    };
    setItemCheckboxes(updatedItemCheckboxes);

    // 모든 개별 상품 checkbox가 선택되었는지 확인
    const allItemsSelected = Object.values(updatedItemCheckboxes).every(
      value => value,
    );
    setSelectAll(allItemsSelected);
  };

  const handleCheckItemDelete = () => {
    const updatedItemCheckboxes = { ...itemCheckboxes };

    for (const key in updatedItemCheckboxes) {
      if (updatedItemCheckboxes[key]) {
        delete updatedItemCheckboxes[key];
      }
    }

    setItemCheckboxes(updatedItemCheckboxes);
  };

  return (
    // <li className="cartLeft">
    //   <div className="cartContents">
    //     <div className="cartCheckDiv">
    //       <span className="cartCheck">
    //         <Checkbox
    //           type="checkbox"
    //           id="btnSelectAll"
    //           className="btnSelectAll"
    //           checked={selectAll}
    //           onChange={handleCheckAll}
    //         >
    //           전체선택
    //         </Checkbox>
    //       </span>
    //       <Button
    //         type="button"
    //         className="btnDeleteAll"
    //         fontscale="small"
    //         scale="middle"
    //         color="whiteAndBlack"
    //         onClick={handleCheckItemDelete}
    //       >
    //         선택 삭제
    //       </Button>
    //     </div>
    //   </div>
    //   <div className="cartList">
    //     <ul className="shoppingList">
    //       {cartList.data &&
    //         cartList.data.map(cartItem => (
    //           <li className="shoppingItemList" key={cartItem.productId}>
    //             <div className="shoppingItemContent">
    //               <span className="itemCheck">
    //                 <Checkbox
    //                   type="checkbox"
    //                   id={`btnSelect${cartItem.productId}`}
    //                   className={`btnSelect${cartItem.productId}`}
    //                   checked={itemCheckboxes.cartItem.productId}
    //                   onChange={() =>
    //                     handleItemCheckboxChange(cartItem.productId)
    //                   }
    //                 >
    //                   선택
    //                 </Checkbox>
    //               </span>
    //               <div>
    //                 <button
    //                   type="button"
    //                   className="btnOption"
    //                   id={cartItem.productId}
    //                 >
    //                   옵션/수량변경
    //                 </button>
    //                 <button
    //                   type="button"
    //                   className="btnDelete"
    //                   value={cartItem.productId}
    //                   title="상품삭제"
    //                 >
    //                   삭제
    //                 </button>
    //               </div>
    //             </div>
    //             <div className="itemDetail">
    //               <div className="itemInfo">
    //                 <div className="itemInfoDiv">
    //                   <div>
    //                     <a href="#!">
    //                       <img
    //                         src={cartItem.productThumbnailImage}
    //                         alt="제품사진"
    //                         className="itemImg"
    //                       />
    //                     </a>
    //                   </div>
    //                   <ul>
    //                     <li>
    //                       <strong>{cartItem.productName}</strong>
    //                     </li>
    //                     <li className="optionArea">
    //                       <ul className="optionSize">
    //                         <li>
    //                           <span className="itemSizeText">사이즈(mm) :</span>
    //                           <span className="itemSizeMm">
    //                             {cartItem.size}
    //                           </span>
    //                         </li>
    //                       </ul>
    //                       <div className="optionQuantity">
    //                         <div>
    //                           <span className="itemQuantityText">수량 :</span>
    //                           <span className="itemQuantity">
    //                             {cartItem.quantity}개
    //                           </span>
    //                         </div>
    //                       </div>
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <ul className="itemPriceBox">
    //                   <li className="itemPrice">
    //                     ￦
    //                     <span className="totalPrice">
    //                       {cartItem.totalPrice}
    //                     </span>
    //                   </li>
    //                 </ul>
    //               </div>
    //               {/* <CartPopUp /> */}
    //             </div>
    //           </li>
    //         ))}
    //     </ul>
    //   </div>
    // </li>
    <div />
  );
};

export default CartLeft;
