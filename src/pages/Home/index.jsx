import React from 'react';
import MenuSidebar from '../../components/MenuSidebar';
import HeaderDash from '../../components/HeaderDash';

import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <MenuSidebar />

      <div>
        <HeaderDash />
      </div>
    </div>
  );
};

export default Home;
