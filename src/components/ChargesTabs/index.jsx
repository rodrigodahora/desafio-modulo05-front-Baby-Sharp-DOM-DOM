import '../../index.css';
import styles from './styles.module.css';
import api from '../../services/api';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChargesTabs = () => {
  const navigate = useNavigate();

  const {
    addClient,
    selectedClient,
    setSelectedClient,
    paidCharges,
    setPaidCharges,
    wonsCharges,
    setWonsCharges,
    expectedCharges,
    setExpectedCharges,
    setSelected,
  } = useContext(MyContext);

  const [dbCharges, setDbCharges] = useState([]);
  const [dbWon, setDbWon] = useState([]);
  const [dbPaid, setDbPaid] = useState([]);
  const [dbExpected, setDbExpected] = useState([]);

  useEffect(() => {
    getCharges();
  }, []);

  async function getCharges() {
    const token = localStorage.getItem('token');

    try {
      const response = await api.get('/listDebts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const paid = response.data.debts.filter(
        (charge) => charge.status === 'Paga',
      );
      const wons = response.data.debts.filter(
        (charge) => charge.status === 'Vencida',
      );
      const expected = response.data.debts.filter(
        (charge) => charge.status === 'Pendente',
      );
      setDbPaid(paid);
      setDbWon(wons);
      setDbExpected(expected);
      setDbCharges(response.data.debts);

      const paidN = paid.map((e) => Number(e.values)).reduce((a, b) => a + b);
      setPaidCharges(paidN);
      const wonsN = wons.map((e) => Number(e.values)).reduce((a, b) => a + b);
      setWonsCharges(wonsN);
      const expectedN = expected
        .map((e) => Number(e.values))
        .reduce((a, b) => a + b);
      setExpectedCharges(expectedN);
    } catch (error) {}
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_paid}>
        <header className={styles.header}>
          <h3>Cobranças Pagas</h3>
          <div className={styles.paid_charges}>10</div>
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
              <td>{dbPaid[0] ? dbPaid[0].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbPaid[1] ? dbPaid[1].client : ' '}</td>
              <td>{dbPaid[1] ? dbPaid[1].id : ' '}</td>
              <td>{dbPaid[1] ? dbPaid[1].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbPaid[2] ? dbPaid[2].client : ' '}</td>
              <td>{dbPaid[2] ? dbPaid[2].id : ' '}</td>
              <td>{dbPaid[2] ? dbPaid[2].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbPaid[3] ? dbPaid[3].client : ' '}</td>
              <td>{dbPaid[3] ? dbPaid[3].id : ' '}</td>
              <td>{dbPaid[3] ? dbPaid[3].values : ' '}</td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <a
            onClick={() => {
              setSelected(3);
              navigate('/Charges');
            }}
          >
            Ver todos
          </a>
        </footer>
      </div>

      <div className={styles.container_won}>
        <header className={styles.header}>
          <h3>Cobranças Vencidas</h3>
          <div className={styles.won_charges}>08</div>
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
              <td>{dbWon[0] ? dbWon[0].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbWon[1] ? dbWon[1].client : ' '}</td>
              <td>{dbWon[1] ? dbWon[1].id : ' '}</td>
              <td>{dbWon[1] ? dbWon[1].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbWon[2] ? dbWon[2].client : ' '}</td>
              <td>{dbWon[2] ? dbWon[2].id : ' '}</td>
              <td>{dbWon[2] ? dbWon[2].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbWon[3] ? dbWon[3].client : ' '}</td>
              <td>{dbWon[3] ? dbWon[3].id : ' '}</td>
              <td>{dbWon[3] ? dbWon[3].values : ' '}</td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <a
            onClick={() => {
              setSelected(3);
              navigate('/Charges');
            }}
          >
            Ver todos
          </a>
        </footer>
      </div>

      <div className={styles.container_expected}>
        <header className={styles.header}>
          <h3>Cobranças Previstas</h3>
          <div className={styles.expected_charges}>05</div>
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
              <td>{dbExpected[0] ? dbExpected[0].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbExpected[1] ? dbExpected[1].client : ' '}</td>
              <td>{dbExpected[1] ? dbExpected[1].id : ' '}</td>
              <td>{dbExpected[1] ? dbExpected[1].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbExpected[2] ? dbExpected[2].client : ' '}</td>
              <td>{dbExpected[2] ? dbExpected[2].id : ' '}</td>
              <td>{dbExpected[2] ? dbExpected[2].values : ' '}</td>
            </tr>
            <tr>
              <td>{dbExpected[3] ? dbExpected[3].client : ' '}</td>
              <td>{dbExpected[3] ? dbExpected[3].id : ' '}</td>
              <td>{dbExpected[3] ? dbExpected[3].values : ' '}</td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <a
            onClick={() => {
              setSelected(3);
              navigate('/Charges');
            }}
          >
            Ver todos
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ChargesTabs;
