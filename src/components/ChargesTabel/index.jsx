import React from 'react';
import styles from './styles.module.css';
import filter from '../../assets/Frame.svg';
import edit from '../../assets/editar.svg';
import deleteRed from '../../assets/delete_red.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

const ChargesTable = () => {
  const { setSelected } = useContext(MyContext);

  const [dbCharges, setDbCharges] = useState([]);

  setSelected(3);

  useEffect(() => {
    getCharges()
  }, [])


  async function getCharges() {

    const token = localStorage.getItem('token');

    try {

      const response = await api.get(
        "/listDebts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setDbCharges(response.data.debts)

    } catch (error) {

    }
  }

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
        {dbCharges.map((e) => {
          const date = new Date(e.expiration)

          return (
            <tr>
              <td>{e.client}</td>
              <td>{e.id}</td>
              <td>{`R$ ${Number(e.values).toFixed(2).replace('.', ',')}`}</td>
              <td>{date.toLocaleDateString('pt-BR')}</td>
              {e.status === "Vencida" && <td>
                <div className={styles.charges_won}>Vencida</div>
              </td>
              }
              {e.status === "Pendente" && <td>
                <div className={styles.charges_expected}>Pendentes</div>
              </td>
              }
              {e.status === "Paga" && <td>
                <div className={styles.charges_paid}>Paga</div>
              </td>
              }
              <td className={styles.charges_descri_p}>
                <p>{e.description}</p>
              </td>
              <td className={styles.charges_descri_btn}>
                <div>
                  <img src={edit} alt="" />
                  <img src={deleteRed} alt="" />
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default ChargesTable;
