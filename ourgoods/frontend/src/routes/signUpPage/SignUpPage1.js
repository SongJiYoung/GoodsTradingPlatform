import React from 'react';
import styles from '../signUpPage/SingUpPage1.module.css';

const SignUpPage1 = () => {
  return (
    <div className={styles.register}>
      <h3>회원가입</h3>
      <form>
        <div className={styles.flex}>
          <ul className={styles.container}>
            <li className={`${styles.item} ${styles.center}`}>이름</li>
            <li className={styles.item}>
              <input autoFocus name="name" placeholder="이름을 입력하세요." />
            </li>
            <li className={styles.item}></li>
          </ul>
          <ul className={styles.container}>
            <li className={`${styles.item} ${styles.center}`}>아이디</li>
            <li className={styles.item}>
              <input
                type="text"
                name="id"
                placeholder="아이디를 입력하세요."
                autoComplete="username"
              />
            </li>
            <li className={styles.item}>
              <button className={styles.check} type="button">
                중복확인
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage1;
