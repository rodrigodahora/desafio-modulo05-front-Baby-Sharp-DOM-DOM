import '../../index.css';
import styles from './styles.module.css';
import api from '../../services/api';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChargesTabs = () => {
  const navigate = useNavigate();

  const { setSelected, dbWon, dbPaid, dbExpected, filterCharges } =
    useContext(MyContext);

  const transformValue = (data) => `${data}`.padStart(2, '0');

  return (
    <div className={styles.container}>
      <div className={styles.container_paid}>
        <header className={styles.header}>
          <h3>Cobranças Pagas</h3>
          <div className={styles.paid_charges}>
            {transformValue(dbPaid.length)}
          </div>
        </header>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>ID da cob.</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dbPaid[0] ? dbPaid[0].client : ' '}</td>
              <td>{dbPaid[0] ? dbPaid[0].id : ' '}</td>
              <td>
                {dbPaid[0]
                  ? `R$ ${Number(dbPaid[0].values)
                      .toFixed(2)
                      .replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbPaid[1] ? dbPaid[1].client : ' '}</td>
              <td>{dbPaid[1] ? dbPaid[1].id : ' '}</td>
              <td>
                {dbPaid[0]
                  ? `R$ ${Number(dbPaid[1].values)
                      .toFixed(2)
                      .replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbPaid[2] ? dbPaid[2].client : ' '}</td>
              <td>{dbPaid[2] ? dbPaid[2].id : ' '}</td>
              <td>
                {dbPaid[0]
                  ? `R$ ${Number(dbPaid[2].values)
                      .toFixed(2)
                      .replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbPaid[3] ? dbPaid[3].client : ' '}</td>
              <td>{dbPaid[3] ? dbPaid[3].id : ' '}</td>
              <td>
                {dbPaid[0]
                  ? `R$ ${Number(dbPaid[3].values)
                      .toFixed(2)
                      .replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <button
            type="button"
            onClick={() => {
              setSelected(3);
              filterCharges('Paga');
              // setVariavel("Paga");
              navigate('/Charges');
            }}
          >
            Ver todos
          </button>
        </footer>
      </div>

      <div className={styles.container_won}>
        <header className={styles.header}>
          <h3>Cobranças Vencidas</h3>
          <div className={styles.won_charges}>
            {transformValue(dbWon.length)}
          </div>
        </header>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>ID da cob.</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dbWon[0] ? dbWon[0].client : ' '}</td>
              <td>{dbWon[0] ? dbWon[0].id : ' '}</td>
              <td>
                {dbWon[0]
                  ? `R$ ${Number(dbWon[0].values).toFixed(2).replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbWon[1] ? dbWon[1].client : ' '}</td>
              <td>{dbWon[1] ? dbWon[1].id : ' '}</td>
              <td>
                {dbWon[1]
                  ? `R$ ${Number(dbWon[1].values).toFixed(2).replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbWon[2] ? dbWon[2].client : ' '}</td>
              <td>{dbWon[2] ? dbWon[2].id : ' '}</td>
              <td>
                {dbWon[2]
                  ? `R$ ${Number(dbWon[2].values).toFixed(2).replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbWon[3] ? dbWon[3].client : ' '}</td>
              <td>{dbWon[3] ? dbWon[3].id : ' '}</td>
              <td>
                {dbWon[3]
                  ? `R$ ${Number(dbWon[3].values).toFixed(2).replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <button
            type="button"
            onClick={() => {
              setSelected(3);
              filterCharges('Vencida');
              navigate('/Charges');
            }}
          >
            Ver todos
          </button>
        </footer>
      </div>

      <div className={styles.container_expected}>
        <header className={styles.header}>
          <h3>Cobranças Previstas</h3>
          <div className={styles.expected_charges}>
            {transformValue(dbExpected.length)}
          </div>
        </header>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>ID da cob.</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dbExpected[0] ? dbExpected[0].client : ' '}</td>
              <td>{dbExpected[0] ? dbExpected[0].id : ' '}</td>
              <td>
                {dbExpected[0]
                  ? `R$ ${Number(dbExpected[0].values)
                      .toFixed(2)
                      .replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbExpected[1] ? dbExpected[1].client : ' '}</td>
              <td>{dbExpected[1] ? dbExpected[1].id : ' '}</td>
              <td>
                {dbExpected[1]
                  ? `R$ ${Number(dbExpected[1].values)
                      .toFixed(2)
                      .replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbExpected[2] ? dbExpected[2].client : ' '}</td>
              <td>{dbExpected[2] ? dbExpected[2].id : ' '}</td>
              <td>
                {dbExpected[2]
                  ? `R$ ${Number(dbExpected[2].values)
                      .toFixed(2)
                      .replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
            <tr>
              <td>{dbExpected[3] ? dbExpected[3].client : ' '}</td>
              <td>{dbExpected[3] ? dbExpected[3].id : ' '}</td>
              <td>
                {dbExpected[3]
                  ? `R$ ${Number(dbExpected[3].values)
                      .toFixed(2)
                      .replace('.', ',')}`
                  : ' '}
              </td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <button
            type="button"
            onClick={() => {
              setSelected(3);
              filterCharges('Pendente');
              navigate('/Charges');
            }}
          >
            Ver todos
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ChargesTabs;
