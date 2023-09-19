import styles from './styles.module.css';

const ListTabs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.charges}>
        <div className={styles.paid_charges}>
          <div className={styles.paid_img}></div>
          <div className={styles.paid_value}>
            <h2>Cobranças Pagas</h2>
            <strong>R$ 30.000</strong>
          </div>
        </div>
      </div>

      <div className={styles.won}>
        <div className={styles.won_charges}>
          <div className={styles.won_img}></div>
          <div className={styles.won_value}>
            <h2>Cobranças Vencidas</h2>
            <strong>R$ 7.000</strong>
          </div>
        </div>
      </div>

      <div className={styles.expected}>
        <div className={styles.expected_charges}>
          <div className={styles.expected_img}></div>
          <div className={styles.expected_value}>
            <h2>Cobranças Previstas</h2>
            <strong>R$ 10.000</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTabs;
