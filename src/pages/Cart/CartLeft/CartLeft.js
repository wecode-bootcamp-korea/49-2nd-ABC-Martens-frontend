import React, { useState } from 'react';
import './CartLeft.scss';
import Checkbox from '../../../components/CheckBox/Checkbox';

const CartLeft = () => {
  const [selectAll, setSelectAll] = useState(false);

  const [itemCheckboxes, setItemCheckboxes] = useState({
    //mockdata 받으면 코드 수정하기
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  const testList = useState([false, false, false, false, false]);
  console.log(itemCheckboxes);

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
                <Checkbox
                  type="checkbox"
                  id="btnSelectItem"
                  className="btnSelectItem"
                  checked={itemCheckboxes.item1}
                  onChange={() => handleItemCheckboxChange('item1')}
                >
                  선택
                </Checkbox>
              </span>
              <div>
                <button type="button" className="btnOption" id="1">
                  옵션/수량변경
                </button>
                <button
                  type="button"
                  className="btnDelete"
                  value="1"
                  title="상품삭제"
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
                        src="https://i.postimg.cc/q7sdqxS7/boots-1.jpg"
                        alt="boots"
                        className="itemImg"
                      />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <strong>상품이름</strong>
                    </li>
                    <li className="optionArea">
                      <ul className="optionSize">
                        <li>
                          <span className="itemSizeText">사이즈(mm) :</span>
                          <span className="itemSizeMm">250</span>
                        </li>
                      </ul>
                      <div className="optionQuantity">
                        <div>
                          <span className="itemQuantityText">수량 :</span>
                          <span className="itemQuantity">1개</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="itemPriceBox">
                  <li className="itemPrice">
                    ￦<span className="totalPrice">230,000</span>
                  </li>
                </ul>
              </div>
              <div />
            </div>
          </li>
          <li className="shoppingItemList">
            <div className="shoppingItemContent">
              <span className="itemCheck">
                <Checkbox
                  type="checkbox"
                  id="btnSelectItem"
                  className="btnSelectItem"
                  checked={itemCheckboxes.item1}
                  onChange={() => handleItemCheckboxChange('item2')}
                >
                  선택
                </Checkbox>
              </span>
              <div>
                <button type="button" className="btnOption" id="2">
                  옵션/수량변경
                </button>
                <button
                  type="button"
                  className="btnDelete"
                  value="2"
                  title="상품삭제"
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
                        src="https://i.postimg.cc/q7sdqxS7/boots-1.jpg"
                        alt="boots"
                        className="itemImg"
                      />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <strong>상품이름</strong>
                    </li>
                    <li className="optionArea">
                      <ul className="optionSize">
                        <li>
                          <span className="itemSizeText">사이즈(mm) :</span>
                          <span className="itemSizeMm">250</span>
                        </li>
                      </ul>
                      <div className="optionQuantity">
                        <div>
                          <span className="itemQuantityText">수량 :</span>
                          <span className="itemQuantity">1개</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="itemPriceBox">
                  <li className="itemPrice">
                    ￦<span className="totalPrice">230,000</span>
                  </li>
                </ul>
              </div>
              <div />
            </div>
          </li>
          <li className="shoppingItemList">
            <div className="shoppingItemContent">
              <span className="itemCheck">
                <Checkbox
                  type="checkbox"
                  id="btnSelectItem"
                  className="btnSelectItem"
                  checked={itemCheckboxes.item1}
                  onChange={() => handleItemCheckboxChange('item3')}
                >
                  선택
                </Checkbox>
              </span>
              <div>
                <button type="button" className="btnOption" id="3">
                  옵션/수량변경
                </button>
                <button
                  type="button"
                  className="btnDelete"
                  value="3"
                  title="상품삭제"
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
                        src="https://i.postimg.cc/q7sdqxS7/boots-1.jpg"
                        alt="boots"
                        className="itemImg"
                      />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <strong>상품이름</strong>
                    </li>
                    <li className="optionArea">
                      <ul className="optionSize">
                        <li>
                          <span className="itemSizeText">사이즈(mm) :</span>
                          <span className="itemSizeMm">250</span>
                        </li>
                      </ul>
                      <div className="optionQuantity">
                        <div>
                          <span className="itemQuantityText">수량 :</span>
                          <span className="itemQuantity">1개</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="itemPriceBox">
                  <li className="itemPrice">
                    ￦<span className="totalPrice">230,000</span>
                  </li>
                </ul>
              </div>
              <div />
            </div>
          </li>
          <li className="shoppingItemList">
            <div className="shoppingItemContent">
              <span className="itemCheck">
                <Checkbox
                  type="checkbox"
                  id="btnSelectItem"
                  className="btnSelectItem"
                  checked={itemCheckboxes.item1}
                  onChange={() => handleItemCheckboxChange('item4')}
                >
                  선택
                </Checkbox>
              </span>
              <div>
                <button type="button" className="btnOption" id="4">
                  옵션/수량변경
                </button>
                <button
                  type="button"
                  className="btnDelete"
                  value="4"
                  title="상품삭제"
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
                        src="https://i.postimg.cc/q7sdqxS7/boots-1.jpg"
                        alt="boots"
                        className="itemImg"
                      />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <strong>상품이름</strong>
                    </li>
                    <li className="optionArea">
                      <ul className="optionSize">
                        <li>
                          <span className="itemSizeText">사이즈(mm) :</span>
                          <span className="itemSizeMm">250</span>
                        </li>
                      </ul>
                      <div className="optionQuantity">
                        <div>
                          <span className="itemQuantityText">수량 :</span>
                          <span className="itemQuantity">1개</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="itemPriceBox">
                  <li className="itemPrice">
                    ￦<span className="totalPrice">230,000</span>
                  </li>
                </ul>
              </div>
              <div />
            </div>
          </li>
          <li className="shoppingItemList">
            <div className="shoppingItemContent">
              <span className="itemCheck">
                <Checkbox
                  type="checkbox"
                  id="btnSelectItem"
                  className="btnSelectItem"
                  checked={itemCheckboxes.item1}
                  onChange={() => handleItemCheckboxChange('item5')}
                >
                  선택
                </Checkbox>
              </span>
              <div>
                <button type="button" className="btnOption" id="5">
                  옵션/수량변경
                </button>
                <button
                  type="button"
                  className="btnDelete"
                  value="5"
                  title="상품삭제"
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
                        src="https://i.postimg.cc/q7sdqxS7/boots-1.jpg"
                        alt="boots"
                        className="itemImg"
                      />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <strong>상품이름</strong>
                    </li>
                    <li className="optionArea">
                      <ul className="optionSize">
                        <li>
                          <span className="itemSizeText">사이즈(mm) :</span>
                          <span className="itemSizeMm">250</span>
                        </li>
                      </ul>
                      <div className="optionQuantity">
                        <div>
                          <span className="itemQuantityText">수량 :</span>
                          <span className="itemQuantity">1개</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="itemPriceBox">
                  <li className="itemPrice">
                    ￦<span className="totalPrice">230,000</span>
                  </li>
                </ul>
              </div>
              <div />
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CartLeft;
