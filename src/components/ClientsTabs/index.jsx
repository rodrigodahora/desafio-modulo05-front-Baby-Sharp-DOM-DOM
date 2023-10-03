import styles from './styles.module.css';
import clientDefaulters from '../../assets/cliente_inadimplente.svg';
import clientInDay from '../../assets/cliente_em_dia.svg';
import '../../index.css';
import api from '../../services/api';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientsTabs = () => {
  const navigate = useNavigate();

  const transformValue = (data) => `${data}`.padStart(2, '0');

  const {
    setSelected,
    dbAllClient,
    setDbAllClient,
    defaulters,
    setdefaulters,
    compliant,
    setCompliant,
    filterClients,
  } = useContext(MyContext);

  return (
    <div className={styles.container_clients}>
      <div className={styles.container_defaulters}>
        <div className={styles.child_defaulters}>
          <header className={styles.header}>
            <div>
              <img src={clientDefaulters} alt="Client_Defaulters" />
              <h3>Clientes Inadimplentes</h3>
            </div>
            <div className={styles.defaulters}>
              {transformValue(defaulters.length)}
            </div>
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
                <td>{defaulters[0] ? defaulters[0].name : ' '}</td>
                <td>{defaulters[0] ? defaulters[0].id : ' '}</td>
                <td>{defaulters[0] ? defaulters[0].cpf : ' '}</td>
              </tr>
              <tr>
                <td>{defaulters[1] ? defaulters[1].name : ' '}</td>
                <td>{defaulters[1] ? defaulters[1].id : ' '}</td>
                <td>{defaulters[1] ? defaulters[1].cpf : ' '}</td>
              </tr>
              <tr>
                <td>{defaulters[2] ? defaulters[2].name : ' '}</td>
                <td>{defaulters[2] ? defaulters[2].id : ' '}</td>
                <td>{defaulters[2] ? defaulters[2].cpf : ' '}</td>
              </tr>
              <tr>
                <td>{defaulters[3] ? defaulters[3].name : ' '}</td>
                <td>{defaulters[3] ? defaulters[3].id : ' '}</td>
                <td>{defaulters[3] ? defaulters[3].cpf : ' '}</td>
              </tr>
            </tbody>
          </table>

          <footer className={styles.footer}>
            <button
              onClick={() => {
                setSelected(2);
                filterClients(true);
                navigate('/Client');
              }}
            >
              Ver todos
            </button>
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
            <div className={styles.in_day}>
              {transformValue(compliant.length)}
            </div>
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
                <td>{compliant[0] ? compliant[0].name : ' '}</td>
                <td>{compliant[0] ? compliant[0].id : ' '}</td>
                <td>{compliant[0] ? compliant[0].cpf : ' '}</td>
              </tr>
              <tr>
                <td>{compliant[1] ? compliant[1].name : ' '}</td>
                <td>{compliant[1] ? compliant[1].id : ' '}</td>
                <td>{compliant[1] ? compliant[1].cpf : ' '}</td>
              </tr>
              <tr>
                <td>{compliant[2] ? compliant[2].name : ' '}</td>
                <td>{compliant[2] ? compliant[2].id : ' '}</td>
                <td>{compliant[2] ? compliant[2].cpf : ' '}</td>
              </tr>
              <tr>
                <td>{compliant[3] ? compliant[3].name : ' '}</td>
                <td>{compliant[3] ? compliant[3].id : ' '}</td>
                <td>{compliant[3] ? compliant[3].cpf : ' '}</td>
              </tr>
            </tbody>
          </table>

          <footer className={styles.footer}>
            <button
              onClick={() => {
                setSelected(2);
                filterClients(false);
                navigate('/Client');
              }}
            >
              Ver todos
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ClientsTabs;
