import React from 'react';
import styles from './styles.module.css';
import '../../index.css';

const MenuSidebar = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.home}>
        <div></div>
        <a href="/home">Home</a>
      </li>
      <li className={styles.clients}>
        <div></div>
        <a href="/clients">Clientes</a>
      </li>
      <li className={styles.charges}>
        <div></div>
        <a href="/charges">Cobranças</a>
      </li>
    </ul>
  );
};

export default MenuSidebar;
