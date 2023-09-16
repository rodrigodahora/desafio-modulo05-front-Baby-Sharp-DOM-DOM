import React, { useState } from 'react';
import HeaderDash from '../../components/HeaderDash';
import MenuSidebar from '../../components/MenuSidebar';
import '../../index.css';

import ChargesTabs from '../../components/ChargesTabs';
import ClientsTabs from '../../components/ClientsTabs';
import ListTabs from '../../components/ListTabs';
import styles from './styles.module.css';

import { useContext } from 'react';
import ModalEditUser from '../../components/ModalEditUser';
import { MyContext } from '../../contexts/MyContext';

const Home = () => {
  const { setSelected } = useContext(MyContext);
  setSelected(1);

  const [openModalUser, setOpenModalUser] = useState(false);

  return (
    <React.Fragment className={styles.mod}>
      {openModalUser && <ModalEditUser setOpenModalUser={setOpenModalUser} />}

      <div className={styles.container}>
        <HeaderDash setOpenModalUser={setOpenModalUser} />
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
    </React.Fragment>
  );
};

export default Home;
