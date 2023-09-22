import { useContext, useState } from 'react';
import chargesIcon from '../../assets/cobranca_menu.svg';
import closeIcon from '../../assets/close.svg';
import checkboxDeselected from '../../assets/checkbox-sphere.svg';
import checkboxSelected from '../../assets/bola_check.svg';
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
// import api from '../../services/api';
import './style.css';

const ChargesModal = () => {
  const { addClient, setAddClient, setFeedback } = useContext(MyContext);

  const [data, setData] = useState({
    name: '',
    description: '',
  });

  return (
    <div className="container">
      <form className="charges-modal-form">
        <header>
          <img
            className="modal-img-close"
            src={closeIcon}
            alt="Close Modal"
            // onClick={() => { clearData() }}
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
            value=""
            type="text"
            placeholder="Digite seu nome"
          />
          <span className="input-modal-box-validation">
            Este campo deve ser preenchido
          </span>
          <label htmlFor="">Descrição*</label>
          <input
            className="input-big"
            name="name"
            id="name"
            value=""
            type="text"
            placeholder="Digite a descrição"
          />
          <span className="input-modal-box-validation">
            Este campo deve ser preenchido
          </span>
        </div>
        <div>
          <div className="charges-form-row">
            <div className="charges-form-colum">
              <label htmlFor="">Vencimento*</label>
              <input
                className="input-small"
                name="name"
                id="name"
                value=""
                type="text"
                placeholder="Digite seu nome"
              />
              <span className="input-modal-box-validation">
                Este campo deve ser preenchido
              </span>
            </div>
            <div className="charges-form-colum">
              <label htmlFor="">Valor*</label>
              <input
                className="input-small"
                name="name"
                id="name"
                value=""
                type="text"
                placeholder="Digite seu nome"
              />
              <span className="input-modal-box-validation">
                Este campo deve ser preenchido
              </span>
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

          <button
            className="button-apply"
            type="button"
            // onClick={handleSubmit}
          >
            Aplicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChargesModal;
