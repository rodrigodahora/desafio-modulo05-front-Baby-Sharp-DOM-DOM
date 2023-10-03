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
    updateClient,
    openModalDeleteCharges,
    setSelected,
    charge,
  } =
    useContext(MyContext);

  setSelected(4);

  return (
    <div className="Client">
      <HeaderDash selec="4" />
      <MenuSidebar selec="4" />
      <ClientDetails />

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
