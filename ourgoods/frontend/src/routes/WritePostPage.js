import React from 'react';

const WritePostPage = () => {
  const handleWrite = () => {
    let post = { id: 6, title: 'input' };
    // setPosts()를해주면됌
  };
  return (
    <div>
      <h1>WritePostPage</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목을 입력하세요" />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePostPage;
