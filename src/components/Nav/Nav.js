import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div id="HeadContainer">
      <div className="FirstHeader">
        <div className="TextBox">
          <label htmlFor="Text">전 상품 무료배송</label>
          <div className="Text2">신규가입 10%혜택</div>
        </div>
        <span>
          <a className="UserInfo" href="/login">
            로그인/회원가입
          </a>
          <div className="FindStore">매장찾기</div>
          <div className="TheNews">공지사항</div>
        </span>
      </div>
      <div className="TwoHeader">
        <img className="LogoNav" src="/images/DrMartens.png" alt="닥터마틴" />

        <nav className="CategoriList">
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
        <div className="CenterBar">
          <div className="search-mode">
            <input className="SearchBar_input" type="search" />
          </div>
          <div className="IconOption">
            <a href="/Cart">
              <img
                className="Basket"
                src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/Icons_cart.svg"
                alt="장바구니"
              />
            </a>
            <a>
              <img
                className="EyesProduct"
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
