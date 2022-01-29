import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import PostPage from './routes/PostPage';
import PostListPage from './routes/PostListPage';
import WritePostPage from './routes/WritePostPage';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './routes/Home';
import AccountRoutes from './routes/accounts/AccountRoutes';

function App() {
  const [user, setUser] = useState(null); //사용자정보관리
  // const authenticated = user != null; //인증여부저장
  // authenticated = user != null;

  //const login = ({ email, password }) => setUser(signIn({ email, password }));
  //const logout = () => setUser(null);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/accounts/*" element={<AccountRoutes />} />
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
