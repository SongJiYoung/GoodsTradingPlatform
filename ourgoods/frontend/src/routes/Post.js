import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import AuthApis from '../api/AuthApis';
import PostsApis from '../api/PostsApis';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: '',
    title: '',
    author: '',
  });

  useEffect(() => {
    readPost(id);
  }, []);

  const readPost = async () => {
    try {
      const response = await PostsApis.getOnePost(id);
      if (response.status === 200) {
        setPost(response.data);
      } else {
        alert(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async () => {
    try {
      const response = await PostsApis.deleteOnePost(id);
      if ((response.data = 'ok')) {
        navigate('/postlist');
      } else {
        alert('삭제실패');
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*
  fetch('', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(id),
  })
    .then((res) => res.text())
    .then((res) => {
      if (res === 'ok') {
        navigate('/postlist');
      } else {
        alert('삭제실패');
      }
    });
*/

  const updatePost = async () => {
    try {
      const postData = { post, id };
      const response = await PostsApis.postUpdate(postData);
      if (response.data === 200) {
        navigate('/updatepost/' + id);
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>굿즈 상세보기</h1>
      <hr />
      <h3>{post.author}</h3>
      <h1>{post.title}</h1>
      <Button variant="secondary" onClick={updatePost}>
        수정
      </Button>{' '}
      <Button variant="secondary" onClick={deletePost}>
        삭제
      </Button>{' '}
    </div>
  );
};
export default Post;
