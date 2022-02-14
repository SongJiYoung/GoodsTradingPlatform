import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import PostsApis from '../../api/PostsApis';

//아이디가 작성자와 동일할 경우에만 수정가능하도록 해야함
const UpdatePost = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    readPost();
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

  const changeValue = (event) => {
    event.preventDefault();
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitPost = (event) => {
    event.preventDefault();
    fetch('/post/' + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (res.statue === 200) return res.json();
      })
      .then((res) => {
        if (res !== null) {
          navigate('/postlist');
        }
      });
  };
  // const submitPost = async () => {
  //   try {
  //     const postData = { post, id };
  //     const response = await PostsApis.postUpdate(postData);
  //     console.log(response);
  //     if (response.data === 201) {
  //       navigate('/postlist');
  //     } else {
  //       return null;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Form onSubmit={submitPost}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>상품명</Form.Label>
        <Form.Control
          type="text"
          placeholder="굿즈명"
          onChange={changeValue}
          name="title"
          value={post.title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>상품설명</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={changeValue}
          name="author"
          value={post.author}
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>상품사진을 등록해주세요</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button type="submit" variant="primary">
        수정하기
      </Button>{' '}
    </Form>
  );
};

export default UpdatePost;
