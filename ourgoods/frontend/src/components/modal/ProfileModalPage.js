import React, { useState } from 'react';
import styled from 'styled-components';


const ModalPage = ({ userData, handleCancel, handleEditSubmit, open, close, header }) => {

  const [edited, setEdited] = useState(userData);
  
  const onCancel = () => {
    handleCancel();
  }

  const onEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(edited);
  }
  return (

    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>
            <form onSubmit={onSubmitEdit}>
            <Input
              type="text"
              autoComplete="userid"
              name="userid"
              placeholder="아이디" />
            <Input
              type="password"
              autoComplete="new-password"
              name="password"
              placeholder="비밀번호"
              onChange={onEditChange} />
            <Input
              type="text"
              autoComplete="username"
              name="username"
              placeholder="이름"
              onChange={onEditChange}  />
            <Input
              type="email"
              autoComplete="useremail"
              name="useremail"
              placeholder="이메일"
              onChange={onEditChange}  />
            <Input
              type="text"
              autoComplete="phonenumber"
              name="phonenumber"
              placeholder="전화번호"
              onChange={onEditChange} />
            </form>
          </main>
           <footer>
            <button onClick={onCancel}>취소</button>
            <button type='submit'>수정</button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
  
export default ModalPage;

const Input = styled.input`
  margin: 0.5rem 2.5rem;
  padding: 0.4rem;
  width: 80%;
  border-radius: 5px;
  border: solid 1px #DEDEDE;
`;
