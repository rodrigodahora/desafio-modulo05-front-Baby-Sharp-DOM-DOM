import React from 'react';
import MenuSidebar from '../../components/MenuSidebar';
import HeaderDash from '../../components/HeaderDash';
import '../../index.css';

import styles from './styles.module.css';
import ListTabs from '../../components/ListTabs';
import ChargesTabs from '../../components/ChargesTabs';
import ClientsTabs from '../../components/ClientsTabs';

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

const Client = () => {
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

export default Client;