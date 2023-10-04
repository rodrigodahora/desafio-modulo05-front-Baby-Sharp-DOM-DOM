import { useContext, useEffect, useState } from 'react';
import filter from '../../assets/filter.svg';
import headerCliente from '../../assets/headerCliente.svg';
import pesquisar from '../../assets/pesquisar.svg';
import ChargesModal from '../../components/ChargesModal';
import ClientDetails from '../../components/ClientDetails';
import ClientModal from '../../components/ClientModal';
import ClientModalUpdate from '../../components/ClientModalUpdate';
import ClientTabel from '../../components/ClientTabel';
import HeaderDash from '../../components/HeaderDash';
import MenuSidebar from '../../components/MenuSidebar';
import ModalFeedback from '../../components/ModalFeedback';
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import './style.css';
import ModalDeleteCharges from '../../components/ModalDeleteCharges';
import EditChargesModal from '../../components/EditChargesModal';
import ErrorSearch from "../../components/ErrorSearch";
import api from '../../services/api';


const Client = () => {
  const {
    addClient,
    setAddClient,
    feedback,
    openModalCharges,
    openModalDeleteCharges,
    updateClient,
    charge, dbSearch, setDbSearsh, search, setSearch } =
    useContext(MyContext);

  useEffect(() => {
    searchSubmit();
  }, [search]);

  async function searchSubmit() {
    console.log(search);
    if (!search) { return setDbSearsh("") }
    console.log(search);
    try {
      const response = await api.post(
        "/searchClient",
        { data: search },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }

      );

      setDbSearsh(response.data.search);
      if (response.data.search.length === 0) { setDbSearsh("") }

    } catch (error) {
      setDbSearsh("")
    }

  }

  return (
    <div className="Client">
      <HeaderDash selec="2" />
      <MenuSidebar selec="2" />
      <div className="Client-body">
        <div className="Client-body-header">
          <div>
            <img src={headerCliente} alt="" /> Clientes
          </div>
          <div>
            <button
              className="Client-add-button"
              onClick={() => {
                setAddClient(!addClient);
              }}
            >
              + Adicionar cliente
            </button>
            <img src={filter} alt="" />
            <div className="Client-box-input">
              <input
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={((e) => { setSearch(e.target.value) })}
              />
              <img src={pesquisar} alt="" />
            </div>
          </div>
        </div>
        <div className="Client-body-tabel">
          {(search && !dbSearch ? <ErrorSearch page="Client" /> : <ClientTabel />)}

        </div>
      </div>
      {openModalCharges && <ChargesModal />}
      {addClient && <ClientModal />}
      {updateClient && <ClientModalUpdate />}
      {feedback && <ModalFeedback />}
      {openModalDeleteCharges && <ModalDeleteCharges />}
      {charge && <EditChargesModal />}
    </div>
  );
};

export default Client;
