import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import styles from './PostListPage.module.css';

const PostListPage = () => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    content: '',
  });

  const { id, title } = post;
  useEffect(() => {
    if (title !== '') {
      settingPost();
    }
  }, [id]);
  //////현재 글쓰기 버튼만누르면 id계속 증가 나중에 고쳐야함
  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
  ]);

  const nextId = useRef(3);

  const handleWrite = (event) => {
    event.preventDefault();
    setPost((prevState) => ({ ...prevState, id: nextId.current }));
    nextId.current = nextId.current + 1;
  };

  const settingPost = () => {
    setPosts((prevState) => [...prevState, post]);
  };

  const handleChangeContent = (event) => {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <div>
        <h1>WritePostPage</h1>
        <hr />
        <form onSubmit={handleWrite}>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            name="title"
            onChange={handleChangeContent}
          />
          <input
            type="text"
            placeholder="제목을 입력하세요"
            name="content"
            onChange={handleChangeContent}
          />
          <button type="submit">글쓰기</button>
        </form>
      </div>
      <h1>PostListPage</h1>
      <hr />
      <ul>
        {posts.map((post) => (
          <li>
            <div className={styles.item_box}>
              <div>
                번호:{post.id}
                제목:{post.title}
                내용:{post.content}
              </div>
              <button>삭제</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
