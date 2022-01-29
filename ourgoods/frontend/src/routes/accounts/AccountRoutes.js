import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../routes/LoginPage';
import SignUpPage from '../../routes/SignUpPage'
import MyPage from './MyPage';
import MyPageRoutes from './mypage_menu/MyPageRoutes';



function AccountRoutes() {
  return (
    <>
      <Routes>
        <Route path={'/my_page'} element={<MyPage />} />
        <Route path={'/my_page/*'} element={<MyPageRoutes />} />     
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/sign_up'} element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default AccountRoutes;
