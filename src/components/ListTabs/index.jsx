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
            <strong>{`R$ ${paidCharges.toFixed(2).replace('.', ',')}`}</strong>
          </div>
        </div>
      </div>

      <div className={styles.won}>
        <div className={styles.won_charges}>
          <div className={styles.won_img}></div>
          <div className={styles.won_value}>
            <h2>Cobranças Vencidas</h2>
            <strong>{`R$ ${(wonsCharges.toFixed(2).replace('.', ','))}`}</strong>
          </div>
        </div>
      </div>

      <div className={styles.expected}>
        <div className={styles.expected_charges}>
          <div className={styles.expected_img}></div>
          <div className={styles.expected_value}>
            <h2>Cobranças Previstas</h2>
            <strong>{`R$ ${(expectedCharges.toFixed(2).replace('.', ','))}`}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTabs;
