import { useContext, useState } from "react";
import chargesIcon from "../../assets/cobranca_menu.svg";
import closeIcon from "../../assets/close.svg";
import checkboxDeselected from "../../assets/checkbox-sphere.svg"
import checkboxSelected from "../../assets/bola-check.svg"
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import api from "../../services/api";
import "./style.css";

const ChargesModal = () => {
  const { addClient, setAddClient, setFeedback } = useContext(MyContext);

  const [data, setData] = useState({
    name: "",
    description: "",

  });

  return (
    <div className="filter-modal">
      <div className="container-charges-modal">
        <div className="modal-close">
          <img
            src={closeIcon}
            alt="Close Modal"
            onClick={() => { clearData() }}
          />
        </div>

        <form className="charges-form">
          <div className="title-modal">
            <img src={chargesIcon} alt="Charges Icon" />
            <h1>Cadastro de Cobrança</h1>
          </div>

          <div className="input-modal-box">
            <label htmlFor=""></label>
            <input
              type="text"
            />
          </div>

          <div className="input-modal-box">
            <label htmlFor=""></label>
            <input
              type="text"
            />
          </div>

          <div>
            <div className="input-modal-box">
              <label htmlFor=""></label>
              <input
                type="text"
              />
            </div>

            <div className="input-modal-box">
              <label htmlFor=""></label>
              <input
                type="text"
              />
            </div>
          </div>

          <div>
            <label>Status*</label>

            <div className="">
              <img
                src={checkboxSelected}
                alt="Checkbox Selected"
              // onClick
              />
              <span>Cobrança Paga</span>
            </div>

            <div>
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
              type="button"
              className="button-cancel"
              onClick={() => { clearData() }}
            >
              Cancelar
            </button>

            <button
              className="button-apply"
              onClick={handleSubmit}
            >
              Aplicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChargesModal;