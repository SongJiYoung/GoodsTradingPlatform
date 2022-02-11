import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/postlist">글목록</Link>
      </li>
      <li>
        <Link to="/writepost">글쓰기</Link>
      </li>
    </ul>
  );
};

export default Navigation;
