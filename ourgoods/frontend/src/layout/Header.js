import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '../elements';
import styled, { createGlobalStyle } from 'styled-components';
import styles from './css/Header.module.css';
import Logo from '../images/ourGoods.svg';
import SearchGlass from '../images/search.svg';
import Home from '../images/home.svg';
import Post from '../images/post.svg';
import MyPage from '../images/my_page.svg';

function Header({ userInfo, onLogout, isLogon }) {
  const { id } = userInfo;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <div
        style={{
          position: 'sticky',
          top: '0',
          width: '100%',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Grid is_flex padding="5px 0px" width="1024px" margin="auto">
          <Grid is_start maxwidth="700px">
            <Link to={`/`}>
              <img width="150px" height="40px" src={Logo} alt="굿즈 로고" />
            </Link>
            <InputWrap>
              <Grid is_flex>
                <form>
                  <Input
                    placeholder="카테고리, 물품명 등을 검색하세요"
                    onChange={handleSubmit}
                  ></Input>
                  <SearchButton>
                    <img
                      style={{ marginRight: '10px' }}
                      src={SearchGlass}
                      alt="검색 돋보기"
                    />
                  </SearchButton>
                </form>
              </Grid>
            </InputWrap>
          </Grid>
          <Link to={`/`} className={styles.link}>
            <Menu>
              <img
                style={{ display: 'block', margin: 'auto' }}
                src={Home}
                alt="메인페이지"
              />
              <P>홈</P>
            </Menu>
          </Link>
          <Link to={`/postlist`} className={styles.link}>
            <Menu>
              <img
                style={{ display: 'block', margin: 'auto' }}
                src={Post}
                alt="게시물페이지"
              />
              <P>게시글</P>
            </Menu>
          </Link>
          <Link to={`/member/my_page`} className={styles.link}>
            <Menu>
              <img
                style={{ display: 'block', margin: 'auto' }}
                src={MyPage}
                alt="마이페이지"
              />
              <P>마이페이지</P>
            </Menu>
          </Link>
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
                  onLogout(isLogon);
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
        </Grid>
      </div>
    </>
  );
}
export default Header;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;
const SearchButton = styled.button`
  background-color: transparent;
  border: hidden;
`;

const InputWrap = styled.div`
  border-radius: 5px;
  border: solid 1px #e9ecef;
  text-decoration: none;
  height: 40px;
  box-sizing: border-box;
  margin: 10px 20px;
`;

const Input = styled.input`
  border: hidden;
  margin: 0px;
  padding: 10px;
  width: 340px;
  font-size: 15px;
  margin: auto;
  -webkit-appearance: none;
  background-color: transparent;

  &::placeholder {
    color: #999999;
  }
`;

const Menu = styled.div`
  &:hover {
    background-color: #d3d3d3;
    border-radius: 5px;
  }
`;

const P = styled.p`
  color: #333333;
  font-size: 10px;
  text-align: center;
  width: 50px;
  margin: auto;
`;

const Button = styled.button`
  width: 90px;
  border-radius: 5px;
  border: solid 1px #e9ecef;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  text-align: center;
  padding: 7px;
  height: 40px;
  margin: 0px 5px;
  background-color: #ffffff;
  color: #333333;

  &:hover {
    background-color: #ec9a71;
    color: #ffffff;
  }
`;
