import styles from './styles.module.css';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

const ListTabs = () => {
  const { paidCharges, wonsCharges, expectedCharges } = useContext(MyContext);

  return (
    <div className={styles.main}>
      <div className={styles.charges}>
        <div className={styles.paid_charges}>
          <div className={styles.paid_img}></div>
          <div className={styles.paid_value}>
            <h2>Cobranças Pagas</h2>
            <strong>
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(paidCharges)}
            </strong>
          </div>
        </div>
      </div>

      <div className={styles.won}>
        <div className={styles.won_charges}>
          <div className={styles.won_img}></div>
          <div className={styles.won_value}>
            <h2>Cobranças Vencidas</h2>
            <strong>
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(wonsCharges)}
            </strong>
          </div>
        </div>
      </div>

      <div className={styles.expected}>
        <div className={styles.expected_charges}>
          <div className={styles.expected_img}></div>
          <div className={styles.expected_value}>
            <h2>Cobranças Previstas</h2>
            <strong>
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(expectedCharges)}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTabs;
