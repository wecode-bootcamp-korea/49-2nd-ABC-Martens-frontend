import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { commodityItem } from '../NavName/NavName';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  const commodityTradingItem = [
    '여성',
    '남성',
    '키즈',
    'SALE',
    '액세서리',
    'COLLABRATIONS',
    'COLLECTION',
    'HOW TO',
    'NEW IN',
    'BEST',
    'EVENT',
  ];

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
        <img
          className="logoNav"
          src={`${process.env.PUBLIC_URL}/images/1000.jpg`}
          alt="닥터마틴"
        />

        <nav className="categoriList">
          <ul className="List">
            {commodityTradingItem.map((option, index) => (
              <li key={index} className={`List${index + 1}`}>
                <Link to={`/?category_id=${Object.keys(commodityItem)[index]}`}>
                  {option}
                </Link>
              </li>
            ))}
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
