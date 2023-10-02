import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Users.scss';
const Users = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  const [selectedMail, setSelectedMail] = useState('선택하세요');
  const [customMail, setCustomMail] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] =
    useState('');
  const [passwordError, setPasswordError] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [isSignUpButtonEnabled, setIsSignUpButtonEnabled] = useState(false);

  const address = [
    '직접입력',
    'naver.com',
    'nate.com',
    'gmail.com',
    'yahoo.com',
    'hanmail.net',
  ];

  const handleClickMailFuction = userMail => {
    setSelectedMail(userMail);
    if (userMail === '직접입력') {
      setCustomMail('');
    } else {
      setCustomMail(userMail);
    }
  };

  const handlePasswordBlur = pass => {
    const password = pass.target.value;
    setPasswordInputValue(password);
    console.log(password);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        '영문 대/소문자와 숫자를 조합한 8자 이상의 비밀번호를 입력해주세요.',
      );
      setIsPasswordValid(false);
    } else {
      setPasswordError('올바른 비밀번호 형식입니다.');
    }
    setIsPasswordValid(true);
    return;
  };

  const handleConfirmPasswordBlur = pass => {
    const rewritePassword = pass.target.value;
    console.log('다시다시', rewritePassword);
    // setConfirmPasswordInputValue(e.target.value);
    if (passwordInputValue !== rewritePassword) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      setPasswordInputValue('');
    } else {
      setPasswordError('비밀번호가 일치합니다.');
    }
  };

  const handleCheckSelectAll = () => {
    setSelectAll(!selectAll);
    const checkboxes1 = document.getElementsByName('tamedInputAgree');
    const checkboxes2 = document.getElementsByName('tamedInput');

    checkboxes1.forEach(checkbox => {
      checkbox.checked = !selectAll;
      console.log('체크박스1', checkbox.checked);
    });
    checkboxes2.forEach(checkbox => {
      checkbox.checked = !selectAll;
      console.log('체크박스2', checkbox.checked);
    });
  };

  const handleCheckboxChange = checkbox => {
    const checkboxes1 = document.getElementsByName('tamedInput');
    const checkboxes2 = document.getElementsByName('tamedInputAgree');
    if (checkbox.name === 'tamedInputAgree') {
      setSelectAll(checkbox.checked);
      console.log('확인용12', setSelectAll(checkbox.checked));
    }
    let allChecked = true;
    checkboxes1.forEach(e => {
      //foreach의 함수동작 확인
      if (!e.checked) {
        allChecked = false;
        // console.log('확인용1', allChecked);
      }
    });
    checkboxes2.forEach(e => {
      if (!e.checked) {
        allChecked = false;
      }
    });
    setSelectAll(allChecked);
    console.log('확인용1', setSelectAll(allChecked));
  };

  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [input4, setInput4] = useState(false);
  const [input5, setInput5] = useState(false);

  useEffect(() => {
    if (input1 && input2 && isPasswordValid) {
      setIsSignUpButtonEnabled(true);
    } else {
      setIsSignUpButtonEnabled(false);
    }
    console.log('에픽트', input1);
    console.log('에픽트', input2);
  }, [input1, input2]);

  useEffect(() => {
    if (isPasswordValid) {
      setIsSignUpButtonEnabled(true);
    } else {
      setIsSignUpButtonEnabled(false);
    }
  }, [isPasswordValid]);

  const handleInputChange1 = () => {
    setInput1(prevInput1 => !prevInput1);
  };

  const handleInputChange2 = () => {
    setInput2(prevInput2 => !prevInput2);
  };

  const handleInputChange3 = () => {
    setInput3(prevInput3 => !prevInput3);
    console.log('인풋3번', input3);
  };

  const handleInputChange4 = () => {
    setInput4(prevInput4 => !prevInput4);
    console.log('인풋4번', input4);
  };
  const handleInputChange5 = () => {
    setInput5(prevInput5 => !prevInput5);
    console.log('인풋5번', input5);
  };

  const handleSignUpClick = () => {
    if (isSignUpButtonEnabled) {
      alert('회원가입이 완료되었습니다.');
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    if (passwordInputValue !== confirmPasswordInputValue) {
      alert('비밀번호를 확인해주세요.');
    } else if (!isSignUpButtonEnabled) {
      alert('약관에 동의해주세요.');
    } else {
      alert('입력정보를 다시 확인해주세요.');
    }
  };
  // const handleEmailInputChange = e => {
  //   setEmailInputValue(e.target.value);
  //   setCustomMail(e.target.value);
  // };

  return (
    <div className="UsersHighestContainer">
      <div className="userMainCotainer">
        <div className="welcomeComment">
          <span className="headMessage">지금 바로 가입하세요.</span>
          <span className="subMessage">
            가입으로 ABC-Martens의 가족이 되실 수 있습니다.
          </span>
        </div>
        <div className="explanationComment">
          <p className="message1">회원가입을 위해 본인확인 진행해주세요.</p>
          <p className="message2">
            휴대폰번호와 이름을 사용하여 본인확인을 합니다.
          </p>
          <div className="phoneCertifyButtonContainer">
            <button className="phoneCertifyButton">휴대폰으로 인증하기</button>
          </div>
          <p className="message3">인증받은 휴대폰번호를 사용하고 있습니다.</p>
        </div>
        <hr className="underLine" />
        <div className="usersInformationInputContainer">
          <div className="idPasscontainer">
            <input type="text" className="inputbox" placeholder="이름" />
          </div>
          <div className="emailContainer">
            <input type="text" className="emailInput" placeholder="이메일" />
            <span className="emailMark">@</span>
            <div className="topSelectBox">
              <div className="selectBox">
                <div className="selectedItem">{selectedMail}</div>
                <ul className="options">
                  {address.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleClickMailFuction(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="emailWordContainer">
            <input
              type="text"
              className="emailWatchInput"
              value={customMail}
              onChange={email => setCustomMail(email.target.value)}
              placeholder="직접 입력"
            />
          </div>

          <span className="caution1">※ 공백 없이 기입해주세요.</span>
          <div className="passwordContainer">
            <input
              type="password"
              className="inputbox"
              name="PasswordBox"
              placeholder="비밀번호"
              onBlur={handlePasswordBlur}
              onChange={pass => setPasswordInputValue(pass.target.value)}
            />
          </div>
          <span className="caution1">
            ※ 영문 대/소문자, 숫자 중 2가지 이상을 조합한 8자리 이상으로
            입력해주세요.
          </span>
          <div className="passwordContainer">
            <input
              type="password"
              className="inputbox"
              name="confirmPasswordBox"
              placeholder="비밀번호 확인"
              value={confirmPasswordInputValue}
              onBlur={handleConfirmPasswordBlur}
              onChange={pass => setConfirmPasswordInputValue(pass.target.value)}
            />
          </div>
          <div className="errorContainer">
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div className="phoneContainer">
            <input
              type="text"
              className="phoneInput"
              placeholder="연도"
              disabled={passwordInputValue !== confirmPasswordInputValue}
            />
            <input
              type="text"
              className="phoneInput"
              placeholder="월"
              disabled={passwordInputValue !== confirmPasswordInputValue}
            />
            <input
              type="text"
              className="phoneInput"
              placeholder="일"
              disabled={passwordInputValue !== confirmPasswordInputValue}
            />
          </div>
          <div className="phoneContainer">
            <input
              type="text"
              className="phoneInput"
              maxLength={3}
              placeholder="휴대폰"
              disabled={passwordInputValue !== confirmPasswordInputValue}
            />
            <input
              type="text"
              className="phoneInput"
              maxLength={4}
              disabled={passwordInputValue !== confirmPasswordInputValue}
            />
            <input
              type="text"
              className="phoneInput"
              maxLength={4}
              disabled={passwordInputValue !== confirmPasswordInputValue}
            />
          </div>
          <div className="sexContainer">
            <span className="titleName">성별</span>
            <label>
              <input
                type="radio"
                name="options"
                value="option1"
                // checked={selectedOption === 'option1'}
                // onChange={handleOptionChange}
              />
              남성
            </label>
            <label>
              <input
                type="radio"
                name="options"
                value="option2"
                // checked={selectedOption === 'option2'}
                // onChange={handleOptionChange}
              />
              여성
            </label>
            <label>
              <input
                type="radio"
                name="options"
                value="option2"
                // checked={selectedOption === 'option2'}
                // onChange={handleOptionChange}
              />
              선택안함
            </label>
          </div>
          <hr className="underLine" />
          <div className="signInformation">
            <div className="inputContainer">
              <label>
                <input
                  type="checkbox"
                  className="allSelect"
                  name="selectall"
                  checked={selectAll}
                  onChange={handleCheckSelectAll}
                />
                <span className="allAgreeText">전체동의</span>
              </label>
            </div>
            <div className="mainCompany">
              <div className="company200">
                제1조(목적) 이 약관은 닥터마틴에어웨어코리아(주) 회사(전자거래
                사업자)가 운영하는 닥터마틴 사이버 몰(이하 "몰"이라 한다)에서
                제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에
                있어 사이버몰과 이용자의 권리·의무 및 책임사항을 규정함을
                목적으로 합니다. ※ 「PC통신등을 이용하는 전자거래에 대해서도 그
                성질에 반하지 않는한 이 약관을 준용합니다」 제2조(정의) ①
                "몰"이란 닥터마틴에어웨어코리아(주) 회사가 재화 또는 용역을
                이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화
                또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며,
                아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
              </div>
            </div>
            <div className="inputContainer">
              <label>
                <input
                  type="checkbox"
                  name="tamedInputAgree"
                  className="selectedInput"
                  onChange={e => {
                    handleCheckboxChange(e.target);
                    handleInputChange1();
                  }}
                />
                <span className="allAgreeText">이용약관 동의</span>
                <span className="cautionMessage">(필수)</span>
              </label>
            </div>
            <div className="mainCompany">
              <div className="company200">
                제1조(목적) 이 약관은 닥터마틴에어웨어코리아(주) 회사(전자거래
                사업자)가 운영하는 닥터마틴 사이버 몰(이하 "몰"이라 한다)에서
                제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에
                있어 사이버몰과 이용자의 권리·의무 및 책임사항을 규정함을
                목적으로 합니다. ※ 「PC통신등을 이용하는 전자거래에 대해서도 그
                성질에 반하지 않는한 이 약관을 준용합니다」 제2조(정의) ①
                "몰"이란 닥터마틴에어웨어코리아(주) 회사가 재화 또는 용역을
                이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를 이용하여 재화
                또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며,
                아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
              </div>
            </div>
            <div className="inputContainer">
              <label>
                {/* <input
                  type="checkbox"
                  name="tamedInputAgree"
                  className="selectedInput"
                  onChange={e => {
                    handleCheckboxChange(e.target);
                    handleInputChange2();
                  }}
                /> */}
                <input
                  type="checkbox"
                  name="tamedInputAgree"
                  className="selectedInput"
                  onChange={e => {
                    handleCheckboxChange(e.target);
                    handleInputChange2();
                  }}
                />
                <span className="allAgreeText">개인정보 수집 및 이용 동의</span>
                <span className="cautionMessage">(필수)</span>
              </label>
            </div>
            <hr className="endLine" />
            <div className="serviceCompany">
              <div className="serviceCompany200">
                할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는
                유익한 쇼핑정보를 SMS, 카카오톡 채널, 이메일을 통해 받아보실
                있습니다.
              </div>
            </div>
            <div className="serviceInput">
              <label className="blockLabel">
                <input
                  type="checkbox"
                  className="select1"
                  name="tamedInput"
                  onChange={e => {
                    handleCheckboxChange(e.target);
                    handleInputChange3();
                  }}
                />
                <span className="allAgreeText">쇼핑/마케팅 정보 수신 동의</span>
              </label>
              <label className="blockLabel">
                <input
                  type="checkbox"
                  className="select1"
                  name="tamedInput"
                  onChange={e => {
                    handleCheckboxChange(e.target);
                    handleInputChange4();
                  }}
                />
                <span className="allAgreeText">SMS (문자, 카카오톡 등)</span>
              </label>
              <label className="blockLabel">
                <input
                  type="checkbox"
                  className="select1"
                  name="tamedInput"
                  onChange={e => {
                    handleCheckboxChange(e.target);
                    handleInputChange5();
                  }}
                />
                <span className="allAgreeText">이메일</span>
              </label>
              <div className="userSignUpButton">
                <button
                  className="signUpButton"
                  onClick={handleSignUpClick}
                  disabled={
                    passwordInputValue !== confirmPasswordInputValue &&
                    isSignUpButtonEnabled
                  }
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
