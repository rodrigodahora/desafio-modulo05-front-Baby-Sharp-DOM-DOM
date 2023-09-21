import React from 'react';
import styles from './styles.module.css';
import filter from '../../assets/Frame.svg';
import edit from '../../assets/editar.svg';
import deleteRed from '../../assets/delete_red.svg';

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

const ChargesTable = () => {
  const { setSelected } = useContext(MyContext);

  setSelected(3);

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
          <td>248563147</td>
          <td>R$ 500,00</td>
          <td>26/01/2021</td>
          <td>
            <div className={styles.charges_won}>Vencido</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Carlos Prado</td>
          <td>148563148</td>
          <td>R$ 400,00</td>
          <td>26/01/2021</td>
          <td>
            <div className={styles.charges_won}>Vencido</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Lara Brito</td>
          <td>648563148</td>
          <td>R$ 300,00</td>
          <td>26/01/2021</td>
          <td>
            <div className={styles.charges_won}>Vencido</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Soraia Neves</td>
          <td>458563145</td>
          <td>R$ 900,00</td>
          <td>27/11/2021</td>
          <td>
            <div className={styles.charges_won}>Vencido</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Sara Silva</td>
          <td>458563145</td>
          <td>R$ 2000,00</td>
          <td>27/11/2021</td>
          <td>
            <div className={styles.charges_expected}>Pendentes</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Carlos Prado</td>
          <td>368563147</td>
          <td>R$ 700,00</td>
          <td>27/11/2021</td>
          <td>
            <div className={styles.charges_expected}>Pendentes</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Lara Brito</td>
          <td>488563147</td>
          <td>R$ 500,00</td>
          <td>27/11/2021</td>
          <td>
            <div className={styles.charges_expected}>Pendentes</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
          </td>
          <td className={styles.charges_descri_btn}>
            <div>
              <img src={edit} alt="" />
              <img src={deleteRed} alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>Darlene Robertson</td>
          <td>578563147</td>
          <td>R$ 300,00</td>
          <td>22/01/2021</td>
          <td>
            <div className={styles.charges_paid}>Paga</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
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
          <td>598563147</td>
          <td>R$ 1000,00</td>
          <td>22/01/2021</td>
          <td>
            <div className={styles.charges_paid}>Paga</div>
          </td>
          <td className={styles.charges_descri_p}>
            <p>lorem ipsum lorem ipsum...</p>
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
