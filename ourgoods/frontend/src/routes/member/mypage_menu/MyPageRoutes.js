import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatListPage from './ChatListPage';
import OrderListPage from './OrderListPage';
import ProfilePage from './ProfilePage';
import WishListPage from './WishListPage';


function MyPageRoutes() {
  return (
    <>
      <Routes>
        <Route path={'/profile'} element={<ProfilePage />} />
        <Route path={'/wish_list'} element={<WishListPage />} />
        <Route path={'/chat_list'} element={<ChatListPage />} />
        <Route path={'/order_list'} element={<OrderListPage />} />
      </Routes>
    </>
  );
}

export default MyPageRoutes;
