import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import styles from './LoginPage.module.css';
//import AuthApis from '../api/AuthApis';

const LoginPage = () => {
  const [userLoginInfo, SetUserLoginInfo] = useState({
    userId: '',
    password: '',
  });
  const [input, setInput] = useState('');

  //postLogin 데이터 전송
  //const login = async ({ userId, userPassword }) => {
  //   try {
  //     const response = await AuthApis.postLogin({ userId, userPassword });
  //     if (!response.data.auth) {//res데이터 형식에 따라  if-else문 코드 변경
  //       setLoginStatus(false);
  //       setLoginFailMessage(response.data.message);
  //     } else {
  //       setLoginStatus(true);
  //       setLoginFailMessage("");
  //       useNavigate("메인화면")
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //getLogin 백엔드에 따라 유동적
  // useEffect(() => {
  //   AuthApis.getLogin().then((response) => {
  //     if (!response.data.auth) {
  //       setLoginStatus(false);
  //     } else {
  //       setLoginStatus(true);
  //       setLoginFailMessage("");
  //       useNavigate("메인화면")
  //     }
  //   });
  // }, []);
  const handleInput = (event) => {
    SetUserLoginInfo((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(userLoginInfo);
    //login(userLoginInfo)
  };

  return (
    <div className={styles.container}>
      <section>
        <h3>로그인</h3>
        <form onSubmit={onSubmit}>
          <input
            className={styles.input}
            autoComplete="userid"
            name="userId"
            placeholder="아이디"
            onChange={handleInput}
          />
          <input
            className={styles.input}
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={handleInput}
          />
          <div className={styles.actions}>
            <Button type="submit">로그인</Button>
            <Link className={styles.register} to="/accounts/sign_up">
              회원가입
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
