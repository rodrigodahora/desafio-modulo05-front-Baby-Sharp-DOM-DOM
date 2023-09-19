import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

import HeaderDash from '../../components/HeaderDash';
import MenuSidebar from '../../components/MenuSidebar';
import '../../index.css';

import ChargesTabs from '../../components/ChargesTabs';
import ClientsTabs from '../../components/ClientsTabs';
import ListTabs from '../../components/ListTabs';
import styles from './styles.module.css';

const Home = () => {
  const { setSelected } = useContext(MyContext);

  setSelected(1);

  return (
    <div className={styles.container}>
      <HeaderDash />
      <MenuSidebar />

      <div className={styles.containerChild}>
        <ListTabs />

        <div>
          <ChargesTabs />
        </div>

        <div>
          <ClientsTabs />
        </div>
      </div>
    </div>
  );
};

export default Home;
