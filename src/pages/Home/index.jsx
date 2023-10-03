import { useContext, useState, useEffect } from 'react';
import ChargesTabs from '../../components/ChargesTabs';
import ClientsTabs from '../../components/ClientsTabs';
import HeaderDash from '../../components/HeaderDash';
import ListTabs from '../../components/ListTabs';
import MenuSidebar from '../../components/MenuSidebar';
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import styles from './styles.module.css';
import api from '../../services/api';


const Home = () => {
  const { setSelected,
    dbWon, setDbWon,
    dbPaid, setDbPaid,
    dbExpected, setDbExpected,
    dbCharges, setDbCharges,
    dbAllClient, setDbAllClient,
    defaulters, setdefaulters,
    compliant, setCompliant,
    paidCharges, setPaidCharges,
    wonsCharges, setWonsCharges,
    expectedCharges, setExpectedCharges,
    feedback, setFeedback,
    getCharges,
    getAllClients, start, setStart
  } = useContext(MyContext);

  setStart(1);

  useEffect(() => {
    getCharges();
  }, []);

  useEffect(() => {
    getAllClients();
  }, []);



  return (
    <div className={styles.container}>
      <HeaderDash selec="1" />
      <MenuSidebar selec="1" />

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
