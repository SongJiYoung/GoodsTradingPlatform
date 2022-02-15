import React from "react";
import { Grid } from "../../../elements";
import styles from "../myPage.module.css";
import styled from "styled-components";
import ProfileData from "./ProfileData";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
       <Grid width="1024px" margin="auto">
          <Div>User님의 활동 이력 입니다.</Div>
          <Grid>
            <Span>나의 정보</Span>  
            <ProfileData></ProfileData>
          </Grid>
        </Grid>
    </div>
  );
};

export default ProfilePage;

const Div = styled.div`
  padding: 0 0 20px 12px;
  font-size: 30px;
  font-weight: bold;
  color: #333333;
`;

const Span = styled.span`
  padding: 0 0 5px 12px;
  font-size: 20px;
  font-weight: bold;
  color: #333333;
`;
