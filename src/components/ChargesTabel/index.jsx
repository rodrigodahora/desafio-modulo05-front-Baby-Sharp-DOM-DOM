import React from 'react';
import styles from './styles.module.css';
import filter from '../../assets/Frame.svg';
import edit from '../../assets/editar.svg';
import deleteRed from '../../assets/delete_red.svg';

const ChargesTable = () => {
  return (
    <table className={styles.container}>
      <thead className={styles.charges_table_header}>
        <tr>
          <th className={styles.charges_client}>
            <img src={filter} alt="" />
            Cliente
          </th>
          <th className={styles.charges_id}>
            <img src={filter} alt="" />
            ID Cob.
          </th>
          <th className={styles.charges_value}>Valor</th>
          <th className={styles.charges_validity}>Data de Venc.</th>
          <th className={styles.charges_status}>Status</th>
          <th className={styles.charges_description}>Descrição</th>
          <th className={styles.charges_button}></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sara da Silva</td>
          <td>054 365 255 87</td>
          <td>sarasilva@cubos.io</td>
          <td>71 9 9462 8654</td>
          <td>
            <div className={styles.charges_won}>Vencido</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Sara da Silva</td>
          <td>054 365 255 87</td>
          <td>sarasilva@cubos.io</td>
          <td>71 9 9462 8654</td>
          <td>
            <div className={styles.charges_won}>Vencido</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Sara da Silva</td>
          <td>054 365 255 87</td>
          <td>sarasilva@cubos.io</td>
          <td>71 9 9462 8654</td>
          <td>
            <div className={styles.charges_won}>Vencido</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Sara da Silva</td>
          <td>054 365 255 87</td>
          <td>sarasilva@cubos.io</td>
          <td>71 9 9462 8654</td>
          <td>
            <div className={styles.charges_won}>Vencido</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Cameron Williamson</td>
          <td>054 365 255 87</td>
          <td>cameronw@cubos.io</td>
          <td>771 9 9962 8658</td>
          <td>
            <div className={styles.charges_expected}>Pendentes</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>

        <tr>
          <td>Cameron Williamson</td>
          <td>054 365 255 87</td>
          <td>cameronw@cubos.io</td>
          <td>771 9 9962 8658</td>
          <td>
            <div className={styles.charges_expected}>Pendentes</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Savannah Nguyen</td>
          <td>054 365 255 87</td>
          <td>snguyen@cubos.io</td>
          <td>71 9 9762 8658</td>
          <td>
            <div className={styles.charges_paid}>Paga</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Savannah Nguyen</td>
          <td>054 365 255 87</td>
          <td>snguyen@cubos.io</td>
          <td>71 9 9762 8658</td>
          <td>
            <div className={styles.charges_paid}>Paga</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ChargesTable;
