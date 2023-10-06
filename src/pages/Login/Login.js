import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToUsers = () => {
    navigate('/users');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  //ID/PW값

  const saveUserId = event => {
    setId(event.target.value);
  };
  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  const code = new URL(document.location.toString()).searchParams.get('code');
  useEffect(() => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: code,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        sessionStorage.setItem('accessToken', 'your-access-token');
        navigate('/');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleLogin = () => {
    fetch('http://10.58.52.133:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log('성공');
        if (result.message === '로그인 성공하였습니다') {
          alert('로그인에 성공했습니다.');
          window.sessionStorage.setItem('token', result.accessToken);
          // localStorage.setItem("nickName", result.nickname);
          // console.log('???', result);
          setTimeout(() => {
            navigate('/');
          }, 4000);
        } else if (result.message !== '로그인 성공하였습니다') {
          alert('로그인 실패');
        }
      });
  };

  console.log(id);
  console.log(pw);

  return (
    <div className="loginHighestContainer">
      <div className="mainContainer">
        <div className="loginNameContainer">
          <h1 className="loginName">로그인</h1>
          <span id="welcomeMent">
            어서오세요. ABC-Martens에 오신 걸 환영합니다.
          </span>
        </div>
        <div className="loginInputContainer">
          <div className="userLoginContainer">
            <div className="logintextConainer">
              <span className="Logintext">회원 로그인</span>
            </div>
            <div className="inputboxContainer">
              <input
                type="text"
                className="inputbox"
                placeholder="아이디"
                onChange={saveUserId}
              />
              <input
                type="password"
                className="inputbox"
                placeholder="비밀번호"
                onChange={saveUserPw}
              />
            </div>
            <div className="idSaveContainer">
              <label for="idSaveCheckbox">
                <input type="checkbox" id="idSaveCheckbox" /> 아이디 자동저장
              </label>
              <button className="findButton">아이디/비밀번호 찾기</button>
            </div>
            <div className="buttonContainer">
              <button className="loginButton" onClick={handleLogin}>
                로그인
              </button>
              <button className="socialLoginButton" onClick={loginHandler}>
                카카오로 1초 회원가입/로그인
              </button>
            </div>
            <div className="userSignUpContainer">
              <button className="findButton" onClick={goToUsers}>
                회원가입
              </button>
            </div>
          </div>
          <div className="nonUserLoginContainer">
            <div className="logintextConainer">
              <span className="Logintext">비회원 주문조회</span>
            </div>
            <div className="inputboxContainer">
              <input type="text" className="inputbox" placeholder="주문번호" />
              <input
                type="password"
                className="inputbox"
                placeholder="이메일"
              />
            </div>
            <div className="buttonContainer">
              <button className="orderCheck">비회원 주문조회</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
