import { useContext } from 'react';
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

const Client = () => {
  const {
    addClient,
    setAddClient,
    selected,
    feedback,
    openModalCharges,
    openModalDeleteCharges,
    updateClient,
    charge, } =
    useContext(MyContext);

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
              <input type="text" placeholder="Pesquisar" />
              <img src={pesquisar} alt="" />
            </div>
          </div>
        </div>
        <div className="Client-body-tabel">
          <ClientTabel />
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
