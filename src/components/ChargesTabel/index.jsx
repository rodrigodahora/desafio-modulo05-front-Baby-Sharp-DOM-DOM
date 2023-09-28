import React from 'react';
import styles from './styles.module.css';
import filter from '../../assets/Frame.svg';
import edit from '../../assets/editar.svg';
import deleteRed from '../../assets/delete_red.svg';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import "../../index.css";

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';

const ChargesTable = () => {
  const { setSelected, setFeedback, setOpenModalDeleteChanges, setOpenDetailCharModal, setOpenModalDetail, dbCharges, setDbCharges, } = useContext(MyContext);

  // const [dbCharges, setDbCharges] = useState([]);

  setSelected(3);

  // useEffect(() => {
  //   getCharges();
  // }, []);

  // async function getCharges() {
  //   const token = localStorage.getItem('token');

  //   try {
  //     const response = await api.get('/listDebts', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     setDbCharges(response.data.debts);
  //   } catch (error) { }
  // }

  function handleClick(client) {
    setOpenDetailCharModal({
      ...client,
    });

    setOpenModalDetail(true);
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
          return (
            <tr>
              <td onClick={() => handleClick(e)}>{e.client}</td>
              <td onClick={() => handleClick(e)}>{e.id}</td>
              <td onClick={() => handleClick(e)}>{`R$ ${Number(e.values)
                .toFixed(2)
                .replace('.', ',')}`}</td>
              <td onClick={() => handleClick(e)}>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(e.expiration),
                )}
              </td>
              {e.status === 'Vencida' && (
                <td onClick={() => handleClick(e)}>
                  <div className={styles.charges_won}>Vencida</div>
                </td>
              )}
              {e.status === 'Pendente' && (
                <td onClick={() => handleClick(e)}>
                  <div className={styles.charges_expected}>Pendentes</div>
                </td>
              )}
              {e.status === 'Paga' && (
                <td onClick={() => handleClick(e)}>
                  <div className={styles.charges_paid}>Paga</div>
                </td>
              )}
              <td
                onClick={() => handleClick(e)}
                className={styles.charges_descri_p}
              >
                <p>{e.description}</p>
              </td>
              <td className={styles.charges_descri_btn}>
                <div>
                  <img src={edit} alt="" />
                  <img
                    src={deleteRed}
                    className='pointer'
                    alt=""
                    onClick={() => {
                      if (e.status === "Paga" || e.status === "Vencida") {
                        setTimeout(() => {
                          setFeedback("Esta cobrança não pode ser excluída!");
                          setTimeout(() => {
                            setFeedback("");
                          }, 5000);
                        }, 1000);
                      } else {
                        setOpenModalDeleteChanges(e.id);
                      }
                    }}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ChargesTable;
