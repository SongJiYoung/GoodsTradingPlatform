import Top from './Top';
import Bottom from './Bottom';
import React from 'react';
import styles from './Ex.module.css';

const Ex = () => {
  return (
    <div className={styles.container}>
      <h1>최상단화면</h1>
      <Top />
      <Bottom />
    </div>
  );
};

export default Ex;
