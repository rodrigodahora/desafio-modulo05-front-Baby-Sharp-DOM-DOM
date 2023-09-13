import React from 'react';
import styles from './styles.module.css';

const HeaderDash = () => {
  return (
    <div className={styles.container}>
      <h1>Resumo de cobranças</h1>

      <div>
        <div className={styles.profile}>LR</div>
        <strong>Lorena</strong>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default HeaderDash;
