import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import api from "../../services/api";
import closeIcon from "../../assets/close.svg";
import clientIcon from "../../assets/cliente_menu.svg";

const ClientModal = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    address: "",
    complement: "",
    zip_code: "",
    district: "",
    city: "",
    state: ""
  });

  const [mainError, setMainError] = useState("");

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  return (
    <div className="filter-client-modal">
      <div className="container-client-modal">
        <div className="client-modal-close">
          <img src={closeIcon} alt="Close Modal" />
        </div>

        <form className="client-form">
          <div className="title-client-modal">
            <img src={clientIcon} alt="Client Icon" />
            <h1>Cadastro do Cliente</h1>
          </div>

          <div className="input-modal-box">
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              name="name"
              placeholder="Digite o nome"
              onChange={handleChange}
            />
          </div>

          <div className="input-modal-box">
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail"
              onChange={handleChange}
            />
          </div>

          <div className="input-modal-box-row">
            <div className="input-modal-box-row-cpf">
              <label htmlFor="cpf">CPF*</label>
              <input
                type="text"
                name="cpf"
                placeholder="Digite o CPF"
                onChange={handleChange}
              />
            </div>

            <div className="input-modal-box-row-phone">
              <label htmlFor="phone">Telefone*</label>
              <input
                type="text"
                name="phone"
                placeholder="Digite o telefone"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-modal-box">
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              placeholder="Digite o endereço"
              onChange={handleChange}
            />
          </div>

          <div className="input-modal-box">
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              name="complement"
              placeholder="Digite o complemento"
              onChange={handleChange}
            />
          </div>

          <div className="input-modal-box-row">
            <div className="input-modal-box-row-zip_code">
              <label htmlFor="zip_code">CEP</label>
              <input
                type="text"
                name="zip_code"
                placeholder="Digite o CEP"
                onChange={handleChange}
              />
            </div>

            <div className="input-modal-box-row-district">
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                name="district"
                placeholder="Digite o bairro"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-modal-box-row">
            <div className="input-modal-box-row-city">
              <label htmlFor="city">Cidade*</label>
              <input
                type="text"
                name="city"
                placeholder="Digite a cidade"
                onChange={handleChange}
              />
            </div>

            <div className="input-modal-box-row-state">
              <label htmlFor="state">UF*</label>
              <input
                type="text"
                name="state"
                placeholder="Digite o UF"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="client-modal-buttons">
            <button className="button-cancel">
              Cancelar
            </button>

            <button className="button-apply">
              Aplicar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ClientModal;