import { useContext, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';

import chargesIcon from '../../assets/cobranca_menu.svg';
import closeIcon from '../../assets/close.svg';
import checkboxDeselected from '../../assets/checkbox-sphere.svg';
import checkboxSelected from '../../assets/bola_check.svg';
import '../../index.css';
import api from '../../services/api';
import './style.css';

const ChargesModal = () => {
  const [errorName, setErrorName] = useState('');
  const [errorDescription, setErrorDescription] = useState('');
  const [errorValidity, setErrorValidity] = useState('');
  const [errorValue, setErrorValue] = useState('');

  const { setOpenModalCharges, openModalCharges, selectedClient } =
    useContext(MyContext);

  const [data, setData] = useState({
    name: '',
    description: '',
    validity: '',
    value: '',
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  async function applySubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      if (!data.name) {
        return setErrorName('Este campo deve ser preechido!');
      } else {
        setErrorName();
      }

      if (!data.description) {
        return setErrorDescription('Este campo deve ser preechido!');
      } else {
        setErrorDescription();
      }

      if (!data.validity) {
        return setErrorValidity('Este campo deve ser preechido!');
      } else {
        setErrorValidity();
      }

      if (!data.value) {
        return setErrorValue('Este campo deve ser preechido!');
      } else {
        setErrorValue();
      }

      const response = await api.post(
        `/registerDebit/${selectedClient}`,
        {
          name: data.name,
          description: data.description,
          validity: data.validity,
          value: data.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setErrorName('');
      setErrorDescription('');
      setErrorValidity('');
      setErrorValue('');
    } catch (error) {}
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
              setOpenModalCharges(!openModalCharges);
            }}
          />
          <div className="title-modal">
            <img src={chargesIcon} alt="Charges Icon" />
            <h1>Cadastro de Cobrança</h1>
          </div>
        </header>

        <div className="charges-form-colum">
          <label htmlFor="">Nome*</label>
          <input
            className="input-small"
            name="name"
            id="name"
            value={data.name}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleChange}
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
                name="validity"
                id="validity"
                value={data.validity}
                type="text"
                placeholder="Digite seu nome"
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
                name="value"
                id="value"
                value={data.value}
                type="text"
                placeholder="Digite seu nome"
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
              src={checkboxSelected}
              alt="Checkbox Selected"
              // onClick
            />
            <span>Cobrança Paga</span>
          </div>

          <div className="charges-expected">
            <img
              src={checkboxDeselected}
              alt="Checkbox Deselected"
              //onclick
            />
            <span>Cobrança Pendente</span>
          </div>
        </div>

        <div className="modal-buttons">
          <button
            className="button-cancel"
            type="button"
            // onClick={() => { clearData() }}
          >
            Cancelar
          </button>

          <button className="button-apply" type="button" onClick={applySubmit}>
            Aplicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChargesModal;
