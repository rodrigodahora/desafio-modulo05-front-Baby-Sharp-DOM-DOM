import { useContext, useEffect, useState } from 'react';
import setaOrdem from "../../assets/Frame.svg";
import plus from "../../assets/add.svg";
import clientIcon from "../../assets/cliente_menu.svg";
import edit from "../../assets/editar.svg";
import deleteIcon from "../../assets/icon_delete.svg";
import editIcon from "../../assets/icone_edit.svg";
import { MyContext } from '../../contexts/MyContext';
import "../../index.css";
import api from '../../services/api';
import "./style.css";


const ClientDetails = () => {
  const {
    selectedClient,
    updateClient, setUpdateClient,
    dbClient, setDbClient,
    setOpenModalCharges,
    feedback, setFeedback,
    setOpenModalDeleteChanges } = useContext(MyContext);

  const [dbDebts, setDbDebts] = useState([]);

  useEffect(() => { getClient() }, [])
  useEffect(() => { getCharges() }, [feedback])

  async function getClient() {

    const token = localStorage.getItem('token');

    try {
      const response = await api.get(
        `/detailClient/${selectedClient}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setDbClient(response.data.client[0])

    } catch (error) {
      console.log(error);
    }
  }

  async function getCharges() {

    const token = localStorage.getItem('token');

    try {
      const response = await api.get(
        `/debtsClient/${selectedClient}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setDbDebts(response.data.debts)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-client-detail">

      <div className="title-client-detail">
        <img src={clientIcon} alt="Client Icon" />
        <h1>
          {dbClient.name}
        </h1>
      </div>

      <div className="client-detail-body">

        <div className="container-data-client">
          <div className="title-data-client-box">
            <h2>Dados do cliente</h2>
            <button className="pointer" onClick={() => { setUpdateClient(!updateClient) }}>
              <img
                src={editIcon}
                alt=""
              />
              Editar Cliente
            </button>
          </div>

          <div className="box-data">
            <div className="box-data-row">
              <div className="collum-email">
                <h3 className="box-data-title">E-mail</h3>
                <h4 className="box-data-content">{dbClient.email}</h4>
              </div>
              <div className="collum-phone">
                <h3 className="box-data-title">Telefone</h3>
                <h4 className="box-data-content">{dbClient.phone}</h4>
              </div>
              <div className="collum-cpf">
                <h3 className="box-data-title">CPF</h3>
                <h4 className="box-data-content">{dbClient.cpf}</h4>
              </div>
            </div>

            <div className="box-data-row">
              <div className="collum-email">
                <h3 className="box-data-title">Endereço</h3>
                <h4 className="box-data-content">{dbClient.address}</h4>
              </div>
              <div className="collum-phone">
                <h3 className="box-data-title">Bairro</h3>
                <h4 className="box-data-content">{dbClient.district}</h4>
              </div>
              <div className="collum-cpf">
                <h3 className="box-data-title">Complemento</h3>
                <h4 className="box-data-content">{dbClient.complement}</h4>
              </div>
              <div className="box-cep">
                <h3 className="box-data-title">CEP</h3>
                <h4 className="box-data-content">{dbClient.zip_code}</h4>
              </div>
              <div className="box-city">
                <h3 className="box-data-title">Cidade</h3>
                <h4 className="box-data-content">{dbClient.city}</h4>
              </div>
              <div className="box-state">
                <h3 className="box-data-title">UF</h3>
                <h4 className="box-data-content">{dbClient.state}</h4>
              </div>
            </div>
          </div>

        </div>


        <div className="container-changes-client">

          <div className="title-data-change-box">
            <h2>Cobrança do Cliente</h2>
            <button onClick={() => { setOpenModalCharges(selectedClient) }} className="change-box-btn">
              <img src={plus} alt="" />
              Nova cobrança
            </button>
          </div>

          <table className="client-changes-table">
            <thead className="client-changes-table-header">
              <tr >
                <th className="collum-idcob"><img src={setaOrdem} alt="" />ID Cob.</th>
                <th className="collum-date"><img src={setaOrdem} alt="" />Data de venc.</th>
                <th className="collum-value">Valor</th>
                <th className="collum-status">Status</th>
                <th className="collum-description">Descrição</th>
                <th className="collum-void">{" "}</th>
              </tr>
            </thead>
            <tbody className="table-charges-row">
              {dbDebts.map((e) => {
                const date = new Date(e.expiration);
                return (
                  <tr >
                    <td >{e.id}</td>
                    <td >{date.toLocaleDateString("pt-br")}</td>
                    <td >{`R$ ${Number(e.values).toFixed(2).replace(".", ",")}`}</td>
                    {e.status === "Vencida" && <td className="row-collum-status"><div className="status-won" >Vencida</div></td>}
                    {e.status === "Pendente" && <td className="row-collum-status"><div className="status-expected" >Pendente</div></td>}
                    {e.status === "Paga" && <td className="row-collum-status"><div className="status-paid" >Paga</div></td>}
                    <td className="row-collum-description">{e.description}</td>
                    <td className="row-icons">
                      <div>
                        <img src={edit} alt="" />
                        <img
                          src={deleteIcon}
                          alt=""
                          className='pointer'
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
                )
              })}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default ClientDetails;