import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "../../elements";
import styles from "./myPage.module.css";
import styled from "styled-components";

const MyPage = () => {
  return (
    <div className={styles.container}>
      <Grid is_flex width="1024px" margin="auto">
        < Link to="profile" className={styles.link}>
          <Menu>Profile</Menu>
        </Link>
        <Link to="wish_list" className={styles.link}>
          <Menu>Wish List</Menu>
        </Link>
        <Link to="chat_list" className={styles.link}>
          <Menu>Chat List</Menu>
        </Link>
        <Link to="order_list" className={styles.link}>
          <Menu>Order List</Menu>
        </Link>
      </Grid>
    </div>
  );
};

export default MyPage;

const Menu = styled.button`

`;
