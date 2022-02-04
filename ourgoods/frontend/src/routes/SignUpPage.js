import React, { useState, useEffect } from 'react';
import AuthApis from '../api/AuthApis';
import Button from '../components/common/Button';
import styles from './SignUpPage.module.css';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [userRegInfo, SetUserRegInfo] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    usableId: false,
    usableEmail: false,
    emailAuth: '',
  });
  const [checkPassword, SetCheckPassword] =
    useState('패스워드 중복확인을 해주세요');

  useEffect(() => {
    passwordCheck();
  }, [userRegInfo]);

  const navigator = useNavigate();

  const handleInput = (event) => {
    SetUserRegInfo((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const passwordCheck = () => {
    const { password, passwordConfirm } = userRegInfo;
    if (password.length < 1 || passwordConfirm < 1) {
      SetCheckPassword('패스워드 중복확인을 해주세요');
    } else if (password === passwordConfirm) {
      SetCheckPassword('패스워드 일치✅');
    } else {
      SetCheckPassword('패스워드 불일치❌');
    }
  };

  const idCheck = async () => {
    const { id } = userRegInfo;
    console.log(id);
    try {
      const response = await AuthApis.idCheck({ id });
      ///console.log(response.data)///////////////////////response값 체크해봐야함
      if (response.data === 'success') {
        alert('사용 가능한 아이디 입니다.');
        SetUserRegInfo((prevState) => {
          return {
            ...prevState,
            usableId: true,
          };
        });
      } else {
        alert('이미 사용중인 아이디 입니다.');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const emailCheck = async () => {
    const { emailAuth } = userRegInfo;
    try {
      const response = await AuthApis.emailCheck();
      if (response.data) {
        if (response.data === emailAuth)
          SetUserRegInfo((prevState) => {
            return { ...prevState, emailAuth: true };
          });
        /////response.data =input 그냥숫자4개 스트링4자면 인증완료
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (event) => {
    event.preventDefault();
    const { id, password, name, email, phone, address, usableId, usableEmail } =
      userRegInfo;

    if (!usableId) {
      alert('아이디 중복확인을 해주세요');
    } else if (!usableEmail) {
      alert('이메일 인증을 해주세요');
    } else if (!id || !password || !name || !email || !phone || address) {
      alert('모든 항목을 작성 해주세요');
    } else {
      try {
        const response = await AuthApis.postRegister(userRegInfo);
        if (response.data) {
          /////// console.log(response);//////////////////////여기 리스폰스값체크필요
          navigator('/');
        } else {
          /////////리스폰스값에따라 처리
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <section>
        <h3>회원가입</h3>
        <form className={styles.form} onSubmit={register}>
          <input
            className={styles.input}
            autoComplete="id"
            name="id"
            placeholder="아이디"
            onChange={handleInput}
            required
          />
          <Button className={styles.button} onClick={idCheck}>
            중복확인
          </Button>
          <input
            className={styles.input}
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={handleInput}
            required
          />
          <input
            className={styles.input}
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={handleInput}
            required
          />
          <span>비밀번호확인: {checkPassword}</span>
          <input
            className={styles.input}
            autoComplete="name"
            name="name"
            placeholder="이름"
            onChange={handleInput}
            required
          />
          <input
            className={styles.input}
            autoComplete="email"
            name="email"
            placeholder="이메일"
            type="email"
            onChange={handleInput}
            required
          />
          <Button className={styles.button} onClick={emailCheck}>
            메일 인증
          </Button>
          <input className={styles.input} placeholder="인증번호" required />
          <input
            className={styles.input}
            autoComplete="phone"
            name="phone"
            placeholder="전화번호"
            onChange={handleInput}
            required
          />
          <input
            className={styles.input}
            autoComplete="address"
            name="address"
            placeholder="주소"
            onChange={handleInput}
          />
          <Button className={styles.button} type="submit">
            회원가입
          </Button>
        </form>
      </section>
    </div>
  );
};

export default SignUpPage;
