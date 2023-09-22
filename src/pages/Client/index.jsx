import filter from '../../assets/filter.svg';
import headerCliente from '../../assets/headerCliente.svg';
import pesquisar from '../../assets/pesquisar.svg';
import HeaderDash from '../../components/HeaderDash';
import MenuSidebar from '../../components/MenuSidebar';
import '../../index.css';
import './style.css';

import ClientTabel from '../../components/ClientTabel';
import ClientModalUpdate from '../../components/ClientModalUpdate';
import ClientDetails from '../../components/ClientDetails';
import ModalFeedback from '../../components/ModalFeedback';

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

const Client = () => {
  const { selected, setSelected, addClient, setAddClient, feedback } =
    useContext(MyContext);

  // setSelected(2);

  return (
    <div className="Client">
      {selected === 4 ? (
        <ClientDetails />
      ) : (
        <div className="Client-body">
          <div className="Client-body-header">
            <div>
              <img src={headerCliente} alt="" /> Clientes
            </div>
            <div>
              <button
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
      )}
      <HeaderDash />
      <MenuSidebar />
      {addClient && <ClientModalUpdate />}
      {feedback && <ModalFeedback />}
    </div>
  );
};

export default Client;
