import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import SignUpPage from '../signUpPage/SignUpPage';
import MyPage from './MyPage';
import MyPageRoutes from './mypage_menu/MyPageRoutes';

function MemberRoutes({ userInfo, userInfoHandler }) {
  return (
    <>
      <Routes>
        <Route path={'/my_page'} element={<MyPage />} />
        <Route path={'/my_page/*'} element={<MyPageRoutes />} />
        <Route
          path={'/login'}
          element={
            <LoginPage userInfo={userInfo} userInfoHandler={userInfoHandler} />
          }
        />
        <Route path={'/sign_up'} element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default MemberRoutes;
