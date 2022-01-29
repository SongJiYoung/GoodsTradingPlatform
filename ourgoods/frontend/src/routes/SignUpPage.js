import React, { useRef } from 'react';
import AuthApis from '../api/AuthApis';
import Button from '../components/common/Button';
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
  const userIdRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const formRef = useRef();
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const phoneNumberRef = useRef();
  const userTownRef = useRef();

  //회원가입 데이터 전송
  // const register = async ({
  //   userId,
  //   password,
  //   userName,
  //   userEmail,
  //   phoneNumber,
  //   userTown,
  // }) => {
  //   try {
  //     const response = await AuthApis.postRegister({
  //       userId,
  //       password,
  //       userName,
  //       userEmail,
  //       phoneNumber,
  //       userTown,
  //     });
  //     if (response.data.regSuccess) {
  //       setTryRegState(true);
  //       setRegMessage(response.data.message);
  //     } else {
  //       setTryRegState(true);
  //       setRegMessage(response.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    const userRegisterInfo = {
      userId: userIdRef.current.value || '',
      password: passwordRef.current.value || '',
      passwordConfirm: passwordConfirmRef.current.value || '',
      userName: userNameRef.current.value || '',
      userEmail: userEmailRef.current.value || '',
      phoneNumber: phoneNumberRef.current.value || '',
      userTown: userTownRef.current.value || '',
    };
    formRef.current.reset();
    console.log(userRegisterInfo);
    //register(userRegisterInfo)
  };

  return (
    <div className={styles.container}>
      <section>
        <h3>회원가입</h3>
        <form className={styles.form} onSubmit={onSubmit} ref={formRef}>
          <input
            className={styles.input}
            autoComplete="userid"
            name="userid"
            placeholder="아이디"
            ref={userIdRef}
            required
          />
          <input
            className={styles.input}
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            ref={passwordRef}
            required
          />
          <input
            className={styles.input}
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            ref={passwordConfirmRef}
            required
          />
          <input
            className={styles.input}
            autoComplete="username"
            name="username"
            placeholder="이름"
            ref={userNameRef}
            required
          />
          <input
            className={styles.input}
            autoComplete="useremail"
            name="useremail"
            placeholder="이메일"
            type="email"
            ref={userEmailRef}
            required
          />
          <input
            className={styles.input}
            autoComplete="phonenumber"
            name="phonenumber"
            placeholder="전화번호"
            ref={phoneNumberRef}
            required
          />
          <input
            className={styles.input}
            autoComplete="userTown"
            name="userTown"
            placeholder="도시"
            ref={userTownRef}
          />
          <Button className={styles.button} type="submit">
            다음
          </Button>
        </form>
      </section>
    </div>
  );
};

export default SignUpPage;
