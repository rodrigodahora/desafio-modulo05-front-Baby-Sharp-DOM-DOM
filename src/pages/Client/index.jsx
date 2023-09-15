import React from 'react';
import MenuSidebar from '../../components/MenuSidebar';
import HeaderDash from '../../components/HeaderDash';
import '../../index.css';

import ListTabs from '../../components/ListTabs';
import ChargesTabs from '../../components/ChargesTabs';
import ClientsTabs from '../../components/ClientsTabs';

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

const Client = () => {
    const { setSelected } = useContext(MyContext);
    setSelected(1);
    return (
        <div className="Client">
            <HeaderDash />
            <MenuSidebar />

            <div className="Client-body">
                <div className="Client-body-header">
                    <div>
                        cliente
                    </div>
                    <div>
                        utilidades
                    </div>
                </div>
                <div className="Client-body-tabel">

                </div>
            </div>
        </div>
    );
};

export default Client;