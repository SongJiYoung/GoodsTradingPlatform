import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../img/ourGoods.svg';
import SearchGlass from '../img/search.svg';
import Button from '../components/common/Button';

function Header({ userInfo, onLogout }) {
  const { id } = userInfo;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.container}>
          <ul className={styles.flex}>
            <li>
              <Link to={`/`}>
                <img className={styles.logo} src={Logo} alt="굿즈 로고" />
              </Link>
            </li>
            <li>
              <form className={styles.form}>
                <input
                  className={styles.input}
                  placeholder="카테고리, 물품명 등을 검색하세요"
                  onChange={handleSubmit}
                ></input>
                <button className={styles.searchButton}>
                  <img
                    className={styles.search}
                    src={SearchGlass}
                    alt="검색 돋보기"
                  />
                </button>
              </form>
            </li>
          </ul>
        </div>
        <div className={styles.container}>
          <ul className={styles.flex}>
            <li>
              <Link className={styles.link} to={`/`}>
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={`/post`}>
                Post
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={`/member/my_page`}>
                MyPage
              </Link>
            </li>
            <li>
              {id ? (
                <span className={styles.span}>{`${id}님`}</span>
              ) : (
                <Link className={styles.link} to={`/member/login`}>
                  <Button>Log In</Button>
                </Link>
              )}
            </li>
            <li>
              {id ? (
                <Button
                  onClick={() => {
                    onLogout();
                  }}
                >
                  Log Out
                </Button>
              ) : (
                <Link to={`/member/sign_up`}>
                  <Button>Sign Up</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
