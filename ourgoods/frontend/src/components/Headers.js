import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/postlist" className="navbar-brand">
            글목록
          </Link>
          <Nav className="me-auto">
            <Link to="/writepost" className="navbar-brand">
              글쓰기
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Headers;
