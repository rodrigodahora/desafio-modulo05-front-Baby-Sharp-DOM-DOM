import React from 'react';
import styles from './styles.module.css';

const ChargesTabs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_won}>
        <header className={styles.header}>
          <h3>Cobranças Vencidas</h3>
          <span className={styles.won_charges}>08</span>
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
              <td>Sara Silva </td>
              <td>223456787</td>
              <td>R$ 1000,00</td>
            </tr>
            <tr>
              <td>Carlos Prado</td>
              <td>223456781</td>
              <td>R$ 400,00</td>
            </tr>
            <tr>
              <td>Lara Brito</td>
              <td>223456781</td>
              <td>R$ 900,00</td>
            </tr>
            <tr>
              <td>Soraia Neves</td>
              <td>223456787</td>
              <td>R$ 700,00</td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <a href="/">Ver todos</a>
        </footer>
      </div>

      <div className={styles.container_expected}>
        <header className={styles.header}>
          <h3>Cobranças Previstas</h3>
          <span className={styles.expected_charges}>05</span>
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
              <td>Sara Silva </td>
              <td>223456787</td>
              <td>R$ 1000,00</td>
            </tr>
            <tr>
              <td>Carlos Prado</td>
              <td>223456781</td>
              <td>R$ 400,00</td>
            </tr>
            <tr>
              <td>Lara Brito</td>
              <td>223456781</td>
              <td>R$ 900,00</td>
            </tr>
            <tr>
              <td>Soraia Neves</td>
              <td>223456787</td>
              <td>R$ 700,00</td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <a href="/">Ver todos</a>
        </footer>
      </div>

      <div className={styles.container_paid}>
        <header className={styles.header}>
          <h3>Cobranças Pagas</h3>
          <span className={styles.paid_charges}>10</span>
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
              <td>Sara Silva </td>
              <td>223456787</td>
              <td>R$ 1000,00</td>
            </tr>
            <tr>
              <td>Carlos Prado</td>
              <td>223456781</td>
              <td>R$ 400,00</td>
            </tr>
            <tr>
              <td>Lara Brito</td>
              <td>223456781</td>
              <td>R$ 900,00</td>
            </tr>
            <tr>
              <td>Soraia Neves</td>
              <td>223456787</td>
              <td>R$ 700,00</td>
            </tr>
          </tbody>
        </table>

        <footer className={styles.footer}>
          <a href="/">Ver todos</a>
        </footer>
      </div>
    </div>
  );
};

export default ChargesTabs;
