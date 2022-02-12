import React, { useEffect } from 'react';

const PostDetail = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });

  useEffect(() => {
    fetch('post/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  return (
    <div>
      <h1>굿즈 상r세보기</h1>
      <hr />
      <h3>{post.author}</h3>
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostDetail;
