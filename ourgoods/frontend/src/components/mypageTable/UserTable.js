import React, { useState } from "react";
import styled from "styled-components";
import Modal from '../modal/ProfileModalPage';
import { Link } from "react-router-dom";

function UserTable({ userData }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <TableSheet >
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>NAME</TableHeader>
            <TableHeader>PASSWORD</TableHeader>
            <TableHeader>EMAIL</TableHeader>
            <TableHeader>PHONE</TableHeader>
            <TableHeader>EDIT</TableHeader>
            <TableHeader>DELETE</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody >
          {userData.map( user => 
          <TableRow key={user.id}>
            <TableData>{user.id}</TableData>
            <TableData>{user.name}</TableData>
            <TableData>{user.pw}</TableData>
            <TableData>{user.email}</TableData>
            <TableData>{user.phone}</TableData>
            <TableData><Button onClick={openModal}>수정하기</Button>
            </TableData>
            <TableData><Link to={`/accounts/my_page`}>탈퇴하기</Link></TableData>
          </TableRow>
          )}
        </TableBody>
      </TableSheet>
      <Modal open={modalOpen} close={closeModal} header="정보 수정하기">
      </Modal>
    </React.Fragment>
  );
}

export default UserTable;

const TableSheet = styled.table`
  width: 1000px;
  margin: auto;
  margin-bottom: 2.5rem;
  margin-top: 0.5rem;
`;

const TableHead = styled.thead`
  font-size: 15px;
  color: #333333;
  border: 1px solid #666666;
`;

const TableHeader = styled.th`
  border: 1px solid #666666;
  padding: 3px 5px;
`;

const TableBody = styled.tbody`
  font-size: 14px;
  color: #333333;
`;

const TableRow = styled.tr`
  border: 1px solid #666666;
`;

const TableData = styled.td`
  border: 1px solid #666666;
  padding: 3px 5px;
`;

const Button = styled.button`
  background-color: transparent;
  border: hidden;

  &:hover{
    opacity: 0.6;
  }
`;