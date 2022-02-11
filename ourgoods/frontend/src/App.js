import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostPage from './routes/PostPage';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './routes/Home';
import MemberRoutes from './routes/member/MemberRoutes';
import AuthApis from './api/AuthApis';
// import Navigation from './components/Navigation';
import PostListPage from './routes/PostListPage';
import WritePostPage from './routes/WritePostPage';
// import Ex from './components/Ex';

function App() {
  const [userInfo, setUserInfo] = useState({
    id: '', //server에서 온 유저 정보 저장
  });
  const [userAuth, setUserAuth] = useState({ isLogon: false });
  const { id } = userInfo;
  const { isLogon } = userAuth;

  useEffect(() => {
    const userInfoSave = JSON.parse(sessionStorage.getItem('userInfo'));
    if (id === '') {
      setUserInfo((prevState) => ({ ...prevState, ...userInfoSave }));
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [id]);

  console.log('App state값', userInfo);
  const userInfoHandler = (response) => {
    setUserAuth((prevState) => ({
      ...prevState,
      isLogon: response.data.isLogon,
    }));
    setUserInfo((prevState) => ({
      ...prevState,
      id: response.data.userid,
    }));
  };

  const onLogout = async (isLogon) => {
    try {
      const response = await AuthApis.postLogout(isLogon);
      setUserAuth((prevState) => ({
        ...prevState,
        isLogon: response.data.isLogon,
      }));
      setUserInfo((prevState) => ({
        ...prevState,
        id: '',
      }));
      window.sessionStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        {/* <Ex /> */}
        <Header userInfo={userInfo} onLogout={onLogout} isLogon={isLogon} />
        {/* <Navigation /> */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostPage />} />
          <Route
            path="/member/*"
            element={<MemberRoutes userInfoHandler={userInfoHandler} />}
          />

          <Route path="/postlist" element={<PostListPage />} />
          <Route path="/writepost" element={<WritePostPage />} />
          {/* <Route path="/@:username">
            <Route index element={<PostListPage />} />
            <Route path=":postId" element={<PostPage />} />
          </Route> */}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
