import React, { useState } from 'react';
import './Cart.scss';
import Checkbox from '../../components/CheckBox/Checkbox';

const Cart = () => {
  const [checked, setChecked] = useState(true);

  const handleCheckAll = e => {};

  return (
    <div className="cart">
      <div className="titleContainer">
        <h2>장바구니</h2>
      </div>
      <form className="cartForm" name="cartForm">
        <ul className="cartWrap">
          <li className="cartLeft">
            <div className="cartContents">
              <div className="cartCheckDiv">
                <span className="cartCheck">
                  <Checkbox checked={checked} onChange={handleCheckAll}>
                    전체선택
                  </Checkbox>
                </span>
                <button type="button" className="btnDeleteAll">
                  선택 삭제
                </button>
              </div>
            </div>
            <div className="cartList">
              <ul className="shoppingList">
                <li className="shoppingItemList">
                  <div className="shoppingItemContent">
                    <span className="itemCheck">
                      <label>
                        <input
                          type="checkbox"
                          className="btnSelectItem"
                          checked={checked}
                        />
                      </label>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Cart;
