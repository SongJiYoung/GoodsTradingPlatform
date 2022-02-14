import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import PostsApis from '../../api/PostsApis';
import styled from 'styled-components';

//작성자,우편번호
//조회수넣어야함

const SellerInfo = styled.ul`
  display: flex;
  justify-content: flex-between;
`;
const Li = styled.li`
  margin: 1rem;
`;
const Img = styled.img`
  width: 800px;
`;

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    content: '',
    price: '',
    imageName: '',
    imageUrl: '',
    isSoldOut: false,
    zonecode: '',
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

  const updatePost = (id) => {
    navigate('/updatepost/' + id);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <hr />
      <SellerInfo>
        <Li>작성자:{post.author}</Li>
        <Li>위치:{post.zonecode}</Li>
        <Li>
          <Button>채팅하기</Button>
        </Li>
        <Li>
          <Button>거래상태</Button>
        </Li>
      </SellerInfo>
      <hr />
      <Img src={post.imageUrl}></Img>
      <h5>{post.content}</h5>
      <Button variant="secondary" onClick={() => updatePost(post.id)}>
        수정
      </Button>{' '}
      <Button
        variant="secondary"
        onClick={() => {
          deletePost();
        }}
      >
        삭제
      </Button>{' '}
    </div>
  );
};
export default Post;
