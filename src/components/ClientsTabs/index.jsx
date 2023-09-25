import styles from './styles.module.css';
import clientDefaulters from '../../assets/cliente_inadimplente.svg';
import clientInDay from '../../assets/cliente_em_dia.svg';
import '../../index.css';
import api from '../../services/api';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const ClientsTabs = () => {
  const navigate = useNavigate();

  const { setSelected } = useContext(MyContext);

  const [defaulters, setdefaulters] = useState([])
  const [compliant, setCompliant] = useState([])


  useEffect(() => { getCharges() }, [])

  async function getCharges() {

    const token = localStorage.getItem('token');

    try {
      const response = await api.get(
        "/listClients",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const defaulters = response.data.clients.filter((client) => client.defaulter);
      setdefaulters(defaulters);
      const compliant = response.data.clients.filter((client) => !client.defaulter);
      setCompliant(compliant);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container_clients}>
      <div className={styles.container_defaulters}>
        <div className={styles.child_defaulters}>
          <header className={styles.header}>
            <div>
              <img src={clientDefaulters} alt="Client_Defaulters" />
              <h3>Clientes Inadimplentes</h3>
            </div>
            <div className={styles.defaulters}>08</div>
          </header>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>ID do clie.</th>
                <th>CPF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{defaulters[0] ? defaulters[0].name : " "}</td>
                <td>{defaulters[0] ? defaulters[0].id : " "}</td>
                <td>{defaulters[0] ? defaulters[0].cpf : " "}</td>
              </tr>
              <tr>
                <td>{defaulters[1] ? defaulters[1].name : " "}</td>
                <td>{defaulters[1] ? defaulters[1].id : " "}</td>
                <td>{defaulters[1] ? defaulters[1].cpf : " "}</td>
              </tr>
              <tr>
                <td>{defaulters[2] ? defaulters[2].name : " "}</td>
                <td>{defaulters[2] ? defaulters[2].id : " "}</td>
                <td>{defaulters[2] ? defaulters[2].cpf : " "}</td>
              </tr>
              <tr>
                <td>{defaulters[3] ? defaulters[3].name : " "}</td>
                <td>{defaulters[3] ? defaulters[3].id : " "}</td>
                <td>{defaulters[3] ? defaulters[3].cpf : " "}</td>
              </tr>
            </tbody>
          </table>

          <footer className={styles.footer}>
            <a onClick={() => {
              setSelected(2);
              navigate("/Client");
            }}>Ver todos</a>
          </footer>
        </div>
      </div>

      <div className={styles.container_defaulters}>
        <div className={styles.child_defaulters}>
          <header className={styles.header}>
            <div>
              <img src={clientInDay} alt="Client_Defaulters" />
              <h3>Clientes em dia</h3>
            </div>
            <div className={styles.in_day}>08</div>
          </header>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>ID do clie.</th>
                <th>CPF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{compliant[0] ? compliant[0].name : " "}</td>
                <td>{compliant[0] ? compliant[0].id : " "}</td>
                <td>{compliant[0] ? compliant[0].cpf : " "}</td>
              </tr>
              <tr>
                <td>{compliant[1] ? compliant[1].name : " "}</td>
                <td>{compliant[1] ? compliant[1].id : " "}</td>
                <td>{compliant[1] ? compliant[1].cpf : " "}</td>
              </tr>
              <tr>
                <td>{compliant[2] ? compliant[2].name : " "}</td>
                <td>{compliant[2] ? compliant[2].id : " "}</td>
                <td>{compliant[2] ? compliant[2].cpf : " "}</td>
              </tr>
              <tr>
                <td>{compliant[3] ? compliant[3].name : " "}</td>
                <td>{compliant[3] ? compliant[3].id : " "}</td>
                <td>{compliant[3] ? compliant[3].cpf : " "}</td>
              </tr>
            </tbody>
          </table>

          <footer className={styles.footer}>
            <a onClick={() => {
              setSelected(2);
              navigate("/Client");
            }}>Ver todos</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ClientsTabs;
