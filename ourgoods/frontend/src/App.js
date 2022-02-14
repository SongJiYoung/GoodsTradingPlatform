import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './routes/Home';
import MemberRoutes from './routes/member/MemberRoutes';
import AuthApis from './api/AuthApis';
import { Container } from 'react-bootstrap';

import Post from './routes/postPages/Post';
import UpdatePost from './routes/postPages/UpdatePost';
import PostListPage from './routes/postPages/PostListPage';
import WritePostPage from './routes/postPages/WritePostPage';

function App({ FileInput }) {
  const [userInfo, setUserInfo] = useState({
    id: '', //server에서 온 유저 정보 저장
    zonecode: '',
  });
  const [userAuth, setUserAuth] = useState({ isLogon: false });
  const { id } = userInfo;
  const { isLogon } = userAuth;

  const navigate = useNavigate();

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
        isLogon: false,
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
    <Container>
      <header>
        <Header userInfo={userInfo} onLogout={onLogout} isLogon={isLogon} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/member/*"
            element={<MemberRoutes userInfoHandler={userInfoHandler} />}
          />
          <Route
            path="/postlist"
            element={<PostListPage userAuth={userAuth} />}
          />
          <Route path="/post/:id" element={<Post />} />
          <Route
            path="/writepost"
            element={
              <WritePostPage FileInput={FileInput} userInfo={userInfo} />
            }
          />
          <Route
            path="updatepost/:id"
            element={<UpdatePost FileInput={FileInput} />}
          />
          {/* <Route path="/@:username">
            <Route index element={<PostListPage />} />
            <Route path=":postId" element={<PostPage />} />
          </Route> */}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}
export default App;
