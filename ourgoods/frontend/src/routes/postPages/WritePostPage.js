import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostsApis from '../../api/PostsApis';
import ImageViewer from '../../components/ImageViewer';
import Button from '../../components/common/Button';
import { Form } from 'react-bootstrap';

const WritePostPage = ({ FileInput, userInfo }) => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    price: '',
    imageName: '',
    imageUrl: '',
    isSoldOut: false,
  });
  const [image, setImage] = useState('');
  const { id, zonecode } = userInfo;

  /*
id
zonecode:'',로그인하고받아와야함
*/

  const navigate = useNavigate();

  const changeValue = (event) => {
    event.preventDefault();
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onLoadFile = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const onDeleteFile = () => {
    URL.revokeObjectURL(image);
    setImage('');
  };

  const onFileChange = (file) => {
    setPost((prevState) => ({
      ...prevState,
      imageName: file.name,
      imageUrl: file.url,
      zonecode: zonecode,
      author: id,
    }));
  };

  const submitPost = async (event) => {
    try {
      event.preventDefault();
      const response = await PostsApis.writePost(post);
      console.log(response);
      if (response.status === 201) {
        navigate('/postlist');
      }
    } catch (error) {
      alert(error);
    }
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
        <Form.Label>가격</Form.Label>
        <Form.Control
          type="number"
          placeholder="숫자만 입력해주세요"
          onChange={changeValue}
          name="price"
        />
        <Form.Label>상품설명</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={changeValue}
          name="content"
        />
      </Form.Group>
      <ImageViewer image={image} />
      <Button type="button" onClick={onDeleteFile}>
        사진삭제
      </Button>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label></Form.Label>
        <FileInput onFileChange={onFileChange} onLoadFile={onLoadFile} />
      </Form.Group>
      <Button type="submit" variant="primary">
        글쓰기
      </Button>
    </Form>
  );
};

export default WritePostPage;
