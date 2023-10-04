import { useContext, useState } from "react";
import clientIcon from "../../assets/cliente_menu.svg";
import closeIcon from "../../assets/close.svg";
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import api from "../../services/api";
import api_zipcode from "../../services/api_zipcode";
import "./style.css";


const ClientModal = () => {
  const { addClient, setAddClient,
    setFeedback,
    isValidEmail,
    isValidCpf,
    isValidPhone,
    maskCPF,
    maskPhone,
    maskZipCode,
    attClDb, setAttClDb,
  } = useContext(MyContext);

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");


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

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorCpf, setErrorCpf] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [viaCep, setViaCep] = useState("");

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
    setCpf("");
    setPhone("");
    setZipCode("");
    setAddClient(!addClient);
  }

  async function getZipCode() {
    try {
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

      const response = await api.post("/registerClient",
        {
          name: data.name,
          email: data.email,
          cpf: cpf,
          phone: phone,
          address: viaCep.logradouro,
          complement: data.complement,
          zip_code: zipCode,
          district: viaCep.bairro,
          city: viaCep.localidade,
          state: viaCep.uf
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

      clearData();

      setTimeout(() => {
        setFeedback("Cadastro concluído com sucesso");
        setAttClDb(!attClDb)
        setTimeout(() => {
          setFeedback("");
        }, 5000);
      }, 1000);

    } catch (error) {

      if (error.response.data.message === "Email já cadastrado!") {
        return setErrorEmail(error.response.data.message);
      } else { setErrorEmail(""); }

      if (error.response.data.message === "CPF já cadastrado!") {
        return setErrorCpf(error.response.data.message);
      } else { setErrorCpf(""); }

      if (error.response.data.message === "Telefone já cadastrado!") {
        return setErrorPhone(error.response.data.message);
      } else { setErrorPhone(""); }

    }
  }

  return (
    <div className="filter-modal">
      <div className="container-client-modal">
        <div className="modal-close">
          <img
            src={closeIcon}
            alt="Close Modal"
            onClick={() => { clearData() }}
          />
        </div>

        <form className="client-form">
          <div className="title-modal">
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
                value={cpf}
                placeholder="Digite o CPF"
                onChange={((e) => { setCpf(maskCPF(e.target.value)) })}
              />
              <span className="modal-error-msg">{errorCpf}</span>
            </div>

            <div className="input-modal-box-row-phone">
              <label htmlFor="phone">Telefone*</label>
              <input
                type="text"
                name="phone"
                value={phone}
                placeholder="Digite o telefone"
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
              value={viaCep.logradouro}
              placeholder="Digite o endereço"
              onChange={(e) => { setViaCep({ ...viaCep, logradouro: (e.target.value) }) }}
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
                value={zipCode}
                placeholder="Digite o CEP"
                onChange={((e) => { setZipCode(maskZipCode(e.target.value)) })}
                onKeyUp={(e) => { if (zipCode.length > 8) { getZipCode(e.target.value) } }}
              />
            </div>

            <div className="input-modal-box-row-district">
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                name="district"
                value={viaCep.bairro}
                placeholder="Digite o bairro"
                onChange={(e) => { setViaCep({ ...viaCep, bairro: (e.target.value) }) }}
              />
            </div>
          </div>

          <div className="input-modal-box-row">
            <div className="input-modal-box-row-city">
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                name="city"
                value={viaCep.localidade}
                placeholder="Digite a cidade"
                onChange={(e) => { setViaCep({ ...viaCep, localidade: (e.target.value) }) }}
              />
              <span className="modal-error-msg"></span>
            </div>

            <div className="input-modal-box-row-state">
              <label htmlFor="state">UF</label>
              <input
                type="text"
                name="state"
                value={viaCep.uf}
                placeholder="Digite o UF"
                onChange={(e) => { setViaCep({ ...viaCep, uf: (e.target.value) }) }}
              />
            </div>
          </div>

          <div className="modal-buttons">
            <button
              type="button"
              className="button-cancel pointer"
              onClick={() => { clearData() }}
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

export default ClientModal;