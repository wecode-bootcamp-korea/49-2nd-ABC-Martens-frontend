import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="footerSvc">
          <ul className="svcBody">
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>매장찾기</li>
            <li>CONTACT</li>
            <li>사이트맵</li>
          </ul>
          <div>
            <img
              src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/icon_sns_twitter 1.svg"
              alt="트위터로고"
            />
            <img
              src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/icon_sns_youtube%201.svg"
              alt="유튜브로고"
            />
            <img
              src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/icon_sns_facebook%201.svg"
              alt="페이스북로고"
            />
            <img
              src="https://www.drmartens.co.kr/data/skin/responsive_ver1_default_gl/images/newbird/icon_sns_instagram%201.svg"
              alt="인스타그램로고"
            />
          </div>
        </div>
        <div className="footerInfo">
          <div>
            <strong>에이비씨마틴코리아(주)</strong>
            <div>
              <ul>
                <li>서울특별시 강남구 도산대로 318 (SB타워) 14층 1,2호</li>
                <li>사업자번호 : 012-34-56789 [사업자정보확인]</li>
                <li>통신판매업신고 : 2023-서울강남-1234호</li>
                <li>개인정보관리책임자 : 개발팀</li>
                <li>대표이사 : 위코드3팀</li>
                <li>이메일 : hello@ABCmartens.co.kr</li>
                <li>팩스 : 012-3456-7890</li>
                <li>호스팅 제공 : 에이비씨마틴코리아(주)</li>
              </ul>
            </div>
          </div>
          <div>
            <dl>
              <dt>우리에 대하여</dt>
              <dd>
                <ul>
                  <li>브랜드 헤리티지</li>
                  <li>이벤트</li>
                  <li>사이즈 가이드</li>
                  <li>SUSTAINABILITY</li>
                  <li>MODERN SLAVERY ACT</li>
                  <li>GENDER PAY GAP</li>
                </ul>
              </dd>
              <dt>고객센터</dt>
              <dd>
                <ul>
                  <li>챗봇 상담</li>
                  <li>1:1 문의</li>
                  <li>자주 묻는 질문</li>
                  <li>공지사항</li>
                  <li>1588-8851 ( 9AM ~ 7PM 점심시간 12:00 ~ 13:00 )</li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <div className="footerCopy">
          All Images and Contents Copyright ©<b>2023 ABC-Matens Korea.</b> All
          Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
