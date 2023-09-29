import styles from './styles.module.css';
import filter from '../../assets/Frame.svg';
import edit from '../../assets/editar.svg';
import deleteRed from '../../assets/delete_red.svg';
import '../../index.css';

import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';

const ChargesTable = () => {
  const {
    setSelected,
    setFeedback,
    setOpenModalDeleteChanges,
    setOpenDetailCharModal,
    setOpenModalDetail,
    setCharge,
    dbCharges,
  } = useContext(MyContext);

  const [dbFilCharges, setDbFilCharges,] = useState();
  const [dbFilId, setDbFilId,] = useState();
  const [filC, setFilC] = useState(false);
  const [filId, setFilId] = useState(false);


  useEffect(() => {
    if (filC) {
      let filCharges = dbCharges.sort((a, b) => (a.client.toLowerCase() > b.client.toLowerCase()) ? 1 : ((b.client.toLowerCase() > a.client.toLowerCase()) ? -1 : 0)
      );
      setDbFilId(filCharges);
      setDbFilCharges(filCharges);
    }
    if (filId) {
      let filCharges = dbCharges.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)
      );
      setDbFilCharges("");
      setDbFilId(filCharges);
    }
  }, [filC, filId]);

  setSelected(3);

  // // useEffect(() => {
  // //   getCharges();
  // // }, []);

  // // async function getCharges() {
  // //   const token = localStorage.getItem('token');

  // //   try {
  // //     const response = await api.get('/listDebts', {
  // //       headers: {
  // //         Authorization: `Bearer ${token}`,
  // //       },
  // //     });

  //     setDbCharges(response.data.debts);
  //   } catch (error) {}
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
            <img src={filter} alt="" onClick={() => {
              setFilC(true);
              setFilId(false);
            }} />
            Cliente
          </th>
          <th className={styles.charges_id}>
            <img src={filter} alt="" onClick={() => {
              setFilId(true);
              setFilC(false);
            }} />
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
        {(dbFilCharges ? dbFilCharges : (dbFilId ? dbFilId : dbCharges)).map((e) => {
          return (
            <tr>
              <td onClick={() => handleClick(e)}>{e.client}</td>
              <td onClick={() => handleClick(e)}>{e.id}</td>
              <td onClick={() => handleClick(e)}>{`R$ ${Number(e.values)
                .toFixed(2)
                .replace('.', ',')}`}</td>
              <td onClick={() => handleClick(e)}>
                {e.expiration}
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
                  <img
                    src={edit}
                    className="pointer"
                    alt=""
                    onClick={() => {
                      if (e.status === "Paga") {
                        setTimeout(() => {
                          setFeedback("Não é possível atualizar cobranças com status Paga!");
                          setTimeout(() => {
                            setFeedback("");
                          }, 5000);
                        }, 1000);
                      } else {
                        setCharge(e);
                      }
                    }}
                  />
                  <img
                    src={deleteRed}
                    className="pointer"
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
