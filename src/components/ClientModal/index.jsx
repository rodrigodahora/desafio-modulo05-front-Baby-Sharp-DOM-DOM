import { useContext, useState } from "react";
import clientIcon from "../../assets/cliente_menu.svg";
import closeIcon from "../../assets/close.svg";
import { MyContext } from '../../contexts/MyContext';
import api from "../../services/api";
import "./style.css";

const ClientModal = () => {
  const { addClient, setAddClient, setFeedback, isValidEmail, isValidCpf, isValidPhone } = useContext(MyContext);

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

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorCpf, setErrorCpf] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorState, setErrorState] = useState("");

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  function clearData() {
    setData({
      ...data,
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
    setAddClient(!addClient);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      if (!data.name) {
        return setErrorName("Informe seu nome!");
      } else { setErrorName(""); }

      if (!data.email) {
        return setErrorEmail("Informe seu email!");
      } else { setErrorEmail(""); }

      if (!isValidEmail(data.email)) {
        return setErrorEmail("Email inválido!");
      } else { setErrorEmail(""); }

      if (!data.cpf) {
        return setErrorCpf("Informe seu CPF!");
      } else { setErrorCpf(""); }

      if (!isValidCpf(data.cpf)) {
        return setErrorCpf("CPF inválido!");
      } else { setErrorCpf("") }

      if (!data.phone) {
        return setErrorPhone("Informe seu Telefone!");
      } else { setErrorPhone(""); }

      if (!isValidPhone(data.phone)) {
        return setErrorPhone("Telefone inválido!");
      } else { setErrorPhone("") }

      if (data.state && data.state.length !== 2) {
        return setErrorState("UF inválido!");
      } else { setErrorState("") }

      const response = await api.post("/registerClient",
        {
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          phone: data.phone,
          address: data.address,
          complement: data.complement,
          zip_code: data.zip_code,
          district: data.district,
          city: data.city,
          state: data.state
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      clearData();

      setTimeout(() => {
        setFeedback(true);
        setTimeout(() => {
          setFeedback(false);
        }, 5000);
      }, 1000);

    } catch (error) {

      if (error.response.data.message === "Email já cadastrado!") {
        return setErrorEmail(error.response.data.message);
      } else {
        setErrorEmail("");
      }

      if (error.response.data.message === "CPF já cadastrado!") {
        return setErrorCpf(error.response.data.message);
      } else {
        setErrorEmail("");
      }

      if (error.response.data.message === "Telefone já cadastrado!") {
        return setErrorPhone(error.response.data.message);
      } else {
        setErrorPhone("");
      }
    }
  }

  return (
    <div className="filter-client-modal">
      <div className="container-client-modal">
        <div className="client-modal-close">
          <img
            src={closeIcon}
            alt="Close Modal"
            onClick={() => { clearData() }}
          />
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
            <span className="modal-error-msg">{errorName}</span>
          </div>

          <div className="input-modal-box">
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail"
              onChange={handleChange}
            />
            <span className="modal-error-msg">{errorEmail}</span>
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
              <span className="modal-error-msg">{errorCpf}</span>
            </div>

            <div className="input-modal-box-row-phone">
              <label htmlFor="phone">Telefone*</label>
              <input
                type="text"
                name="phone"
                placeholder="Digite o telefone"
                onChange={handleChange}
              />
              <span className="modal-error-msg">{errorPhone}</span>
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
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                name="city"
                placeholder="Digite a cidade"
                onChange={handleChange}
              />
              <span className="modal-error-msg"></span>
            </div>

            <div className="input-modal-box-row-state">
              <label htmlFor="state">UF</label>
              <input
                type="text"
                name="state"
                placeholder="Digite o UF"
                onChange={handleChange}
              />
              <span className="modal-error-msg">{errorState}</span>
            </div>
          </div>

          <div className="client-modal-buttons">
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

export default ClientModal;