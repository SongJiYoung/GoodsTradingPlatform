import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WritePostPage = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
  });

  const navigate = useNavigate();

  const changeValue = (event) => {
    event.preventDefault();
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitPost = (event) => {
    event.preventDefault();
    fetch('/post', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (res.statue === 201) return res.json();
      })
      .then((res) => {
        if (res !== null) {
          navigate('/postlist');
        }
      });
  };

  return (
    <Form onSubmit={submitPost}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>상품명</Form.Label>
        <Form.Control
          type="text"
          placeholder="굿즈명"
          onChange={changeValue}
          name="title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>상품설명</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={changeValue}
          name="author"
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>상품사진을 등록해주세요</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button type="submit" variant="primary">
        글쓰기
      </Button>{' '}
    </Form>
  );
};

export default WritePostPage;
