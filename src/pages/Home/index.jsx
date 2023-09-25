import { useContext } from 'react';
import ChargesTabs from '../../components/ChargesTabs';
import ClientsTabs from '../../components/ClientsTabs';
import HeaderDash from '../../components/HeaderDash';
import ListTabs from '../../components/ListTabs';
import MenuSidebar from '../../components/MenuSidebar';
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
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
