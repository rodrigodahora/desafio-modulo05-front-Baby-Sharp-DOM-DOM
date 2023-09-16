import React from 'react';
import MenuSidebar from '../../components/MenuSidebar';
import HeaderDash from '../../components/HeaderDash';
import '../../index.css';
import "./style.css"
import headerCliente from "../../assets/headerCliente.svg"
import filter from "../../assets/filter.svg"
import pesquisar from "../../assets/pesquisar.svg"

import ClientTabel from '../../components/ClientTabel';
import ChargesTabs from '../../components/ChargesTabs';
import ClientsTabs from '../../components/ClientsTabs';

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

const Client = () => {
    const { setSelected } = useContext(MyContext);
    setSelected(2);
    return (
        <div className="Client">

            <div className="Client-body">
                <div className="Client-body-header">
                    <div>
                        <img src={headerCliente} alt="" /> Clientes
                    </div>
                    <div>
                        <button>+ Adicionar cliente</button>
                        <img src={filter} alt="" />
                        <div className="Client-box-input">
                            <input
                                type="text"
                                placeholder="Pesquisar"
                            />
                            <img src={pesquisar} alt="" />
                        </div>
                    </div>
                </div>
                <div className="Client-body-tabel">
                    <ClientTabel />
                </div>
            </div>
            <HeaderDash />
            <MenuSidebar />
        </div>
    );
};

export default Client;