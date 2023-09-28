import { useContext, useState } from "react";
import { MyContext } from "../../contexts/MyContext";

import chargesIcon from "../../assets/cobranca_menu.svg";
import closeIcon from "../../assets/close.svg";
import checkboxDeselected from "../../assets/checkbox-sphere.svg";
import checkboxSelected from "../../assets/bola_check.svg";
import "../../index.css";
import api from "../../services/api";
import "./style.css";

const ChargesModal = () => {
  const { setOpenModalCharges, selectedClient, dbClient, setFeedback, attChDb, setAttChDb } =
    useContext(MyContext);

  const [errorName, setErrorName] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [errorValidity, setErrorValidity] = useState("");
  const [errorValue, setErrorValue] = useState("");

  const [data, setData] = useState({
    description: "",
    expiration: "",
    values: "",
    status: "Paga"
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  async function applySubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {

      if (!data.description) {
        return setErrorDescription("Este campo deve ser preechido!");
      } else {
        setErrorDescription();
      }

      if (!data.expiration) {
        return setErrorValidity("Este campo deve ser preechido!");
      } else {
        setErrorValidity();
      }

      if (!data.values) {
        return setErrorValue("Este campo deve ser preechido!");
      } else {
        setErrorValue();
      }
      const response = await api.post(
        `/registerDebt/${selectedClient}`,
        {
          description: data.description,
          expiration: data.expiration,
          values: data.values,
          status: data.status
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setErrorName("");
      setErrorDescription("");
      setErrorValidity("");
      setErrorValue("");
      setOpenModalCharges("")

      setTimeout(() => {
        setFeedback("Cobrança Cadastrada com sucesso!");
        setAttChDb(!attChDb)
        setTimeout(() => {
          setFeedback("");
        }, 5000);
      }, 1000);


    } catch (error) { }
  }

  return (
    <div className="container">
      <form className="charges-modal-form">
        <header>
          <img
            className="modal-img-close"
            src={closeIcon}
            alt="Close Modal"
            onClick={() => {
              setOpenModalCharges("");
            }}
          />
          <div className="title-modal">
            <img src={chargesIcon} alt="Charges Icon" />
            <h6>Cadastro de Cobrança</h6>
          </div>
        </header>

        <div className="charges-form-colum">
          <label htmlFor="">Nome*</label>
          <input
            className="input-small"
            name="name"
            id="name"
            value={dbClient.name}
            type="text"
            placeholder="Digite seu nome"
          />
          <span className="input-modal-box-validation">{errorName}</span>
          <label htmlFor="">Descrição*</label>
          <input
            className="input-big"
            name="description"
            id="description"
            value={data.description}
            type="text"
            placeholder="Digite a descrição"
            maxLength={45}
            onChange={handleChange}
          />
          <span className="input-modal-box-validation">{errorDescription}</span>
        </div>
        <div>
          <div className="charges-form-row">
            <div className="charges-form-colum">
              <label htmlFor="">Vencimento*</label>
              <input
                className="input-small"
                name="expiration"
                id="expiration"
                value={data.expiration}
                type="text"
                placeholder="Digite o vencimento"
                onChange={handleChange}
              />
              <span className="input-modal-box-validation">
                {errorValidity}
              </span>
            </div>
            <div className="charges-form-colum">
              <label htmlFor="">Valor*</label>
              <input
                className="input-small"
                name="values"
                id="values"
                value={data.values}
                type="text"
                placeholder="Digite o valor"
                onChange={handleChange}
              />
              <span className="input-modal-box-validation">{errorValue}</span>
            </div>
          </div>
        </div>

        <div className="charges-form-colum">
          <label>Status*</label>

          <div className="charges-won">
            <img
              src={data.status === "Paga" ? checkboxSelected : checkboxDeselected}
              alt="Checkbox Selected"
              className="pointer"
              onClick={(() => { setData({ ...data, status: "Paga" }) })}
            />
            <span>Cobrança Paga</span>
          </div>

          <div className="charges-expected">
            <img
              src={data.status === "Pendente" ? checkboxSelected : checkboxDeselected}
              alt="Checkbox Deselected"
              className="pointer"
              onClick={(() => { setData({ ...data, status: "Pendente" }) })}
            />
            <span>Cobrança Pendente</span>
          </div>
        </div>

        <div className="modal-buttons">
          <button
            className="button-cancel pointer"
            type="button"
            onClick={() => { setOpenModalCharges("") }}
          >
            Cancelar
          </button>

          <button className="button-apply pointer" type="button" onClick={applySubmit}>
            Aplicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChargesModal;
