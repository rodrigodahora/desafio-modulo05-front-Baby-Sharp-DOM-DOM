import styles from './styles.module.css';
import closeIcon from '../../assets/close.svg';
import chargesIcon from '../../assets/cobranca_menu.svg';
import checkboxDeselected from '../../assets/checkbox-sphere.svg';
import checkboxSelected from '../../assets/bola_check.svg';
import api from "../../services/api";

import { useContext, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';

const EditChargesModal = () => {
  const { charge, setCharge, setFeedback, setAttChDb, attChDb } = useContext(MyContext);

  const [data, setData] = useState({
    name: charge.client,
    description: charge.description,
    expiration: charge.expiration,
    values: charge.values,
    status: charge.status
  });

  const [errorDescription, setErrorDescription] = useState("");
  const [errorValidity, setErrorValidity] = useState("");
  const [errorValue, setErrorValue] = useState("");

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  async function handleSubmit(e) {
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

      const response = await api.put(
        `/updateDebts/${charge.id}`,
        {
          name: data.name,
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

      setCharge("");

      setTimeout(() => {
        setFeedback("Cobrança editada com sucesso!");
        setAttChDb(!attChDb)
        setTimeout(() => {
          setFeedback("");
        }, 5000);
      }, 1000);

    } catch (error) {

    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.charges_modal_edit}>
        <header>
          <img
            className={styles.modal_img_close}
            src={closeIcon}
            alt="Close Modal"
            onClick={() => {
              setCharge("");
            }}
          />
          <div className={styles.title_modal}>
            <img src={chargesIcon} alt="Charges Icon" />
            <h6>Edição de cobrança</h6>
          </div>
        </header>
        <div className={styles.charges_form_colum}>
          <label htmlFor="">Nome*</label>
          <input
            className={styles.input_small}
            name="name"
            id="name"
            value={data.name}
            type="text"
            placeholder="Digite seu nome"
          />
          <span className={styles.input_modal_box_validation}></span>
          <label htmlFor="">Descrição*</label>
          <input
            className={styles.input_big}
            name="description"
            id="description"
            value={data.description}
            type="text"
            placeholder="Digite a descrição"
            maxLength={45}
            onChange={handleChange}
          />
          <span className={styles.input_modal_box_validation}>{errorDescription}</span>
        </div>
        <div>
          <div className={styles.charges_form_row}>
            <div className={styles.charges_form_colum}>
              <label htmlFor="">Vencimento*</label>
              <input
                className={styles.input_small}
                name="expiration"
                id="expiration"
                value={data.expiration}
                type="text"
                placeholder="Digite o vencimento"
                onChange={handleChange}
              />
              <span className={styles.input_modal_box_validation}>{errorValidity}</span>
            </div>
            <div className={styles.charges_form_colum}>
              <label htmlFor="">Valor*</label>
              <input
                className={styles.input_small}
                name="values"
                id="values"
                value={data.values}
                type="text"
                placeholder="Digite o valor"
                onChange={handleChange}
              />
              <span className={styles.input_modal_box_validation}>{errorValue}</span>
            </div>
          </div>
        </div>

        <div className={styles.charges_form_colum}>
          <label>Status*</label>

          <div className={styles.charges_won}>
            <img
              src={data.status === "Paga" ? checkboxSelected : checkboxDeselected}
              alt="Checkbox Selected"
              className="pointer"
              onClick={(() => { setData({ ...data, status: "Paga" }) })}
            />
            <span>Cobrança Paga</span>
          </div>

          <div className={styles.charges_expected}>
            <img
              src={data.status === "Pendente" ? checkboxSelected : checkboxDeselected}
              alt="Checkbox Deselected"
              className="pointer"
              onClick={(() => { setData({ ...data, status: "Pendente" }) })}
            />
            <span>Cobrança Pendente</span>
          </div>
        </div>

        <div className={styles.modal_buttons}>
          <button
            className={styles.button_cancel}
            type="button"
            onClick={() => { setCharge(""); }}
          >
            Cancelar
          </button>

          <button
            className={styles.button_apply}
            type="button"
            onClick={handleSubmit}
          >
            Aplicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditChargesModal;
