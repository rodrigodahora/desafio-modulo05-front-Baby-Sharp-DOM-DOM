import React from 'react';
import MenuSidebar from '../../components/MenuSidebar';
import HeaderDash from '../../components/HeaderDash';
import '../../index.css';

import styles from './styles.module.css';
import ListTabs from '../../components/ListTabs';
import ChargesTabs from '../../components/ChargesTabs';

const Home = () => {
  return (
    <div className={styles.container}>
      <MenuSidebar />

      <div className={styles.containerChild}>
        <HeaderDash />

        <ListTabs />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 50px',
          }}
        >
          <ChargesTabs />
          <ChargesTabs />
        </div>
      </div>
    </div>
  );
};

export default Home;
