import React from 'react';
import styles from './styles.module.css';
import '../../index.css';

const HeaderDash = () => {
  return (
    <div className={styles.container}>
      <h1>Resumo de cobranças</h1>

      <div className={styles.login}>
        <div className={styles.profile}>LR</div>
        <strong>Lorena</strong>
        <div className={styles.arrow_down}></div>
      </div>
    </div>
  );
};

export default HeaderDash;
