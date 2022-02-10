import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import PostPage from './routes/PostPage';
import PostListPage from './routes/PostListPage';
import WritePostPage from './routes/WritePostPage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './routes/Home';
import MemberRoutes from './routes/member/MemberRoutes';

function App() {
  const [userInfo, setUserInfo] = useState({
    id: '', //server에서 온 유저 정보 저장
    sessionId: '',
  });
  const { id } = userInfo;

  useEffect(() => {
    const userInfoSave = JSON.parse(sessionStorage.getItem('userInfo'));
    if (id === '') {
      setUserInfo((prev) => ({ ...prev, ...userInfoSave }));
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [id]);

  console.log('App state값', userInfo);
  const userInfoHandler = (response) => {
    setUserInfo((prevState) => ({
      ...prevState,
      id: response.data.id,
      sessionId: response.data.sessionId,
    }));
  };

  const onLogout = () => {
    setUserInfo((prevState) => ({
      ...prevState,
      id: '',
    }));
    window.sessionStorage.clear();
  };

  return (
    <>
      <header>
        <Header userInfo={userInfo} onLogout={onLogout} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostPage />} />
          <Route
            path="/member/*"
            element={<MemberRoutes userInfoHandler={userInfoHandler} />}
          />
          <Route path="/write" element={<WritePostPage />} />
          <Route path="/@:username">
            <Route index element={<PostListPage />} />
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
