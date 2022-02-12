import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePost = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    ///post/:id
    //updatepost/post/:id 로날라감
    fetch('/post/' + id)
      .then((res) => res.json())
      .then((res) => {
        setPost(res);
      });
  }, []);

  const changeValue = (event) => {
    event.preventDefault();
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitPost = (event) => {
    event.preventDefault();
    fetch('', { method: 'PUT' })
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
        글쓰기
      </Button>{' '}
    </Form>
  );
};

export default UpdatePost;
