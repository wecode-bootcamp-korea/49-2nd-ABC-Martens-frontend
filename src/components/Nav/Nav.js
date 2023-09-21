import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div id="headContainer">
      <div className="firstHeader">
        <div className="textBox">
          <label htmlFor="text">전 상품 무료배송</label>
          <div className="text2">신규가입 10%혜택</div>
        </div>
        <span>
          <a className="userInfo" href="/login">
            로그인/회원가입
          </a>
          <div className="findStore">매장찾기</div>
          <div className="theNews">공지사항</div>
        </span>
      </div>
      <div className="twoHeader">
        <img className="logoNav" src="/images/DrMartens.png" alt="닥터마틴" />

        <nav className="categoriList">
          <ul className="List">
            <li className="List1">여성</li>
            <li className="List2">남성</li>
            <li className="List3">키즈</li>
            <li className="List4">액세서리</li>
            <li className="List5">SALE</li>
            <li className="List6">COLLABRATIONS</li>
            <li className="List7">COLLECTION</li>
            <li className="List8">HOW TO</li>
            <li className="List9">NEW IN</li>
            <li className="List10">BEST</li>
            <li className="List11">EVENT</li>
          </ul>
        </nav>
        <div className="centerBar">
          <div className="search-mode">
            <input className="searchBar_input" type="search" />
          </div>
          <div className="iconOption">
            <a href="/Cart">
              <img
                className="Basket"
                src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/Icons_cart.svg"
                alt="장바구니"
              />
            </a>
            <a>
              <img
                className="eyesProduct"
                src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/Icons_recently.svg"
                alt="눈"
              />
            </a>
            <a href="/login">
              <img
                className="pageback"
                src="/images/user.png"
                title="사람 아이콘"
                alt="페이지"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
