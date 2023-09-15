import React from 'react';
import MenuSidebar from '../../components/MenuSidebar';
import HeaderDash from '../../components/HeaderDash';
import '../../index.css';
import "./style.css"

import ClientTabel from '../../components/ClientTabel';
import ChargesTabs from '../../components/ChargesTabs';
import ClientsTabs from '../../components/ClientsTabs';
import ClientModal from '../../components/ClientModal';

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
                    <ClientTabel />
                </div>
            </div>
            <ClientModal />
        </div>

    );
};

export default Client;