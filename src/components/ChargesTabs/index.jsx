import React from 'react';
import styles from './styles.module.css';

const ChargesTabs = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Cobranças Vencidas</h3>
        <span className={styles.amount_charges}>08</span>
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
  );
};

export default ChargesTabs;
