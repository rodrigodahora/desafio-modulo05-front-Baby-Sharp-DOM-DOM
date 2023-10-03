import { useContext, useEffect, useState } from 'react';
import agrupamento from '../../assets/Frame.svg';
import cobranca from '../../assets/cobranca.svg';
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import api from '../../services/api';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function ClientTabel() {
  const navigate = useNavigate();

  const { setOpenModalCharges,
    addClient,
    selectedClient, setSelectedClient,
    dbClient, setDbClient,
    dbAllClient, setDbAllClient, } =
    useContext(MyContext);

  const [dbFilClient, setDbFilClients] = useState();
  const [fil, setFil] = useState(false);


  useEffect(() => {
    if (fil) {
      let FilClients = dbAllClient.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0)
      );
      setDbFilClients(FilClients)
    }
  }, [fil]);

  return (
    <table className="client-table">
      <thead className="client-table-header">
        <tr>
          <th className="client-client">
            <img src={agrupamento} onClick={() => {
              setFil(!fil)
            }} alt="" />
            Cliente
          </th>
          <th className="client-cpf">CPF</th>
          <th className="client-email">E-mail</th>
          <th className="client-phone">Telefone</th>
          <th className="client-status">Status</th>
          <th className="client-new-charge">Criar Cobrança</th>
        </tr>
      </thead>
      <tbody>
        {(dbFilClient ? dbFilClient : dbAllClient).map((client) => {
          return (
            <tr>
              <td
                className="pointer"
                onClick={() => {
                  localStorage.setItem("id", client.id);
                  setSelectedClient(client.id);
                  navigate("/DetailClient")
                }}
              >
                {client.name}
              </td>
              <td>{client.cpf}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <div
                  className={
                    client.defaulter ? 'client-defaulter' : 'client-compliant'
                  }
                >
                  {client.defaulter ? 'Inadimplente' : 'Em dia'}
                </div>
              </td>
              <td>
                <div
                  className="client-charge pointer"
                  onClick={() => {
                    setOpenModalCharges(client.id);
                    setSelectedClient(client.id)
                    setDbClient({ ...dbClient, name: client.name })
                  }}
                >
                  <img src={cobranca} alt="" />
                  <p>Cobrança</p>
                </div>{' '}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
