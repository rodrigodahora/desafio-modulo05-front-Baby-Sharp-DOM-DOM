import { useContext, useState } from 'react';
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
    charge, } =
    useContext(MyContext);

  const [search, setSearch] = useState("");
  const [dbSearch, setDbSearsh] = useState("")

  async function searchSubmit() {
    console.log(search);
    if (!search) { return setDbSearsh("") }
    try {
      const response = await api.get(
        "/searchClient",
        { data: search },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }

      );

      setDbSearsh(response.data.search)

      console.log(response.data.search);
    } catch (error) {

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
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={searchSubmit}
              />
              <img src={pesquisar} alt="" />
            </div>
          </div>
        </div>
        <div className="Client-body-tabel">
          <ClientTabel />
          {/* <ErrorSearch page="Client" /> */}
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
