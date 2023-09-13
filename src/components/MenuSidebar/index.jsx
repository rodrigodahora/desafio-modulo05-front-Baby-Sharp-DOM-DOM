import React from 'react';
import styles from './styles.module.css';

const MenuSidebar = () => {
  return (
    <ul className={styles.container}>
      <li>
        <a className={`${styles.link} ${styles.linkActive}`} href="/home">
          Home
        </a>
      </li>
      <li>
        <a className={styles.link} href="/clients">
          Clientes
        </a>
      </li>
      <li>
        <a className={styles.link} href="/charges">
          Cobranças
        </a>
      </li>
    </ul>
  );
};

export default MenuSidebar;
