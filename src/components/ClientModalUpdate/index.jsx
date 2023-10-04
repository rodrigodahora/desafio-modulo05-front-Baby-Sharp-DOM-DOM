import { useContext, useEffect, useState } from "react";
import clientIcon from "../../assets/cliente_menu.svg";
import closeIcon from "../../assets/close.svg";
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import api from "../../services/api";
import api_zipcode from "../../services/api_zipcode";
import "./style.css";


const ClientModalUpdate = () => {
  const { setFeedback,
    isValidEmail,
    isValidCpf,
    isValidPhone,
    maskCPF,
    maskPhone,
    maskZipCode,
    updateClient, setUpdateClient,
    selectedClient,
    dbClient, setDbClient } = useContext(MyContext);

  const [data, setData] = useState({
    name: dbClient.name,
    email: dbClient.email,
    cpf: dbClient.cpf,
    phone: dbClient.phone,
    address: dbClient.address,
    complement: dbClient.complement,
    zip_code: dbClient.zip_code,
    district: dbClient.district,
    city: dbClient.city,
    state: dbClient.state
  });

  const [cpf, setCpf] = useState(dbClient.cpf);
  const [phone, setPhone] = useState(dbClient.phone);
  const [zipCode, setZipCode] = useState(dbClient.zip_code);


  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorCpf, setErrorCpf] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorState, setErrorState] = useState("");
  const [viaCep, setViaCep] = useState("");

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  };

  async function getZipCode() {
    try {
      console.log("Estou Aqui");
      const response = await api_zipcode.get(`${zipCode}/json/`);
      setViaCep(response.data);
    } catch (error) {
      console.log(error);
    }
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

      if (!cpf) {
        return setErrorCpf("Informe seu CPF!");
      } else { setErrorCpf(""); }

      if (!isValidCpf(cpf)) {
        return setErrorCpf("CPF inválido!");
      } else { setErrorCpf("") }

      if (!phone) {
        return setErrorPhone("Informe seu Telefone!");
      } else { setErrorPhone(""); }

      if (!isValidPhone(phone)) {
        return setErrorPhone("Telefone inválido!");
      } else { setErrorPhone("") }

      if (data.state && data.state.length !== 2) {
        return setErrorState("UF inválido!");
      } else { setErrorState("") }

      const response = await api.put(`/editClients/${localStorage.getItem('id')}`,
        {
          name: data.name,
          email: data.email,
          cpf: cpf,
          phone: phone,
          address: data.address,
          complement: data.complement,
          zip_code: zipCode,
          district: data.district,
          city: data.city,
          state: data.state
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      setDbClient({
        ...dbClient,
        name: data.name,
        email: data.email,
        cpf: cpf,
        phone: phone,
        address: data.address,
        complement: data.complement,
        zip_code: zipCode,
        district: data.district,
        city: data.city,
        state: data.state
      })
      setUpdateClient(!updateClient);

      setTimeout(() => {
        setFeedback("Edições do cadastro concluídas com sucesso");
        setTimeout(() => {
          setFeedback("");
        }, 5000);
      }, 1000);

    } catch (error) {

      if (error.response.data.message === "Email já cadastrado!") {
        return setErrorEmail(error.response.data.message);
      } else { setErrorEmail(""); }

      if (error.response.data.message === "Email já cadastrado por outro cliente!") {
        return setErrorEmail(error.response.data.message);
      } else { setErrorEmail(""); }

      if (error.response.data.message === "CPF já cadastrado!") {
        return setErrorCpf(error.response.data.message);
      } else { setErrorCpf(""); }

      if (error.response.data.message === "CPF já cadastrado por outro cliente!") {
        return setErrorCpf(error.response.data.message);
      } else { setErrorCpf(""); }

      if (error.response.data.message === "Telefone já cadastrado!") {
        return setErrorPhone(error.response.data.message);
      } else { setErrorPhone(""); }

      if (error.response.data.message === "Telefone já cadastrado por outro cliente!") {
        return setErrorPhone(error.response.data.message);
      } else { setErrorPhone(""); }

    }
  }

  return (
    <div className="filter-modal">
      <div className="container-client-modal-update">
        <div className="modal-close">
          <img
            src={closeIcon}
            alt="Close Modal"
            onClick={() => { setUpdateClient(!updateClient) }}
          />
        </div>

        <form className="client-form">
          <div className="title-modal">
            <img src={clientIcon} alt="Client Icon" />
            <h1>Editar Cliente</h1>
          </div>

          <div className="input-modal-box">
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              placeholder="Digite seu nome"
              onChange={handleChange}
            />
            <span className="modal-error-msg">{errorName}</span>
          </div>

          <div className="input-modal-box">
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              placeholder="Digite seu e-mail"
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
                id="cpf"
                value={cpf}
                placeholder="Digite seu CPF"
                onChange={((e) => { setCpf(maskCPF(e.target.value)) })} />
              <span className="modal-error-msg">{errorCpf}</span>
            </div>

            <div className="input-modal-box-row-phone">
              <label htmlFor="phone">Telefone*</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                placeholder="Digite seu telefone"
                onChange={((e) => { setPhone(maskPhone(e.target.value)) })}
              />
              <span className="modal-error-msg">{errorPhone}</span>
            </div>
          </div>

          <div className="input-modal-box">
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              name="address"
              id="address"
              value={data.address}
              placeholder="Digite seu endereço"
              onChange={handleChange}
            />
          </div>

          <div className="input-modal-box">
            <label htmlFor="complement">Complemento</label>
            <input
              type="text"
              name="complement"
              id="complement"
              value={data.complement}
              placeholder="Digite seu complemento"
              onChange={handleChange}
            />
          </div>

          <div className="input-modal-box-row">
            <div className="input-modal-box-row-zip_code">
              <label htmlFor="zip_code">CEP</label>
              <input
                type="text"
                name="zip_code"
                id="zip_code"
                value={zipCode}
                placeholder="Digite seu CEP"
                onChange={((e) => { setZipCode(maskZipCode(e.target.value)) })}
                onBlur={(e) => { getZipCode(e.target.value) }}
              />
            </div>

            <div className="input-modal-box-row-district">
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                name="district"
                id="district"
                value={data.district}
                placeholder="Digite seu bairro"
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
                id="city"
                value={data.city}
                placeholder="Digite sua cidade"
                onChange={handleChange}
              />
              <span className="modal-error-msg"></span>
            </div>

            <div className="input-modal-box-row-state">
              <label htmlFor="state">UF</label>
              <input
                type="text"
                name="state"
                id="state"
                value={data.state}
                placeholder="Digite seu UF"
                onChange={handleChange}
              />
              <span className="modal-error-msg">{errorState}</span>
            </div>
          </div>

          <div className="modal-buttons">
            <button
              type="button"
              className="button-cancel pointer"
              onClick={() => { setUpdateClient("") }}
            >
              Cancelar
            </button>

            <button
              className="button-apply pointer"
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

export default ClientModalUpdate;