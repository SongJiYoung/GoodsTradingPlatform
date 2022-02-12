import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import styles from './PostListPage.module.css';
import PostItem from '../../components/PostItem';
import PostsApis from '../../api/PostsApis';

const PostListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    readPostLIsts();
  }, []);

  const readPostLIsts = async () => {
    try {
      const response = await PostsApis.getPostList();
      if (response.status === 200) {
        setPosts(response.data);
      } else {
        alert(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>상품 리스트 보기</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostListPage;
