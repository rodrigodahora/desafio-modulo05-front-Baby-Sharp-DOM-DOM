import styles from './styles.module.css';
import clientDefaulters from '../../assets/cliente_inadimplente.svg';
import clientInDay from '../../assets/cliente_em_dia.svg';
import '../../index.css';

const ClientsTabs = () => {
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
                <td>Cameron Williamson</td>
                <td>223456787</td>
                <td>041.477.456-56</td>
              </tr>
              <tr>
                <td>Savannah Nguyen</td>
                <td>223456787</td>
                <td>041.477.456-56</td>
              </tr>
              <tr>
                <td>Darlene Robertson</td>
                <td>223456787</td>
                <td>041.477.456-56</td>
              </tr>
              <tr>
                <td>Marvin McKinney</td>
                <td>223456787</td>
                <td>041.477.456-56</td>
              </tr>
            </tbody>
          </table>

          <footer className={styles.footer}>
            <a href="/">Ver todos</a>
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
                <td>Cameron Williamson</td>
                <td>223456787</td>
                <td>041.477.456-56</td>
              </tr>
              <tr>
                <td>Savannah Nguyen</td>
                <td>223456787</td>
                <td>041.477.456-56</td>
              </tr>
              <tr>
                <td>Darlene Robertson</td>
                <td>223456787</td>
                <td>041.477.456-56</td>
              </tr>
              <tr>
                <td>Marvin McKinney</td>
                <td>223456787</td>
                <td>041.477.456-56</td>
              </tr>
            </tbody>
          </table>

          <footer className={styles.footer}>
            <a href="/">Ver todos</a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ClientsTabs;
