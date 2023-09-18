import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import bola2 from "../../assets/bola_check.svg";
import bola4 from "../../assets/bola_confirmado.svg";
import bola1 from "../../assets/bola_done.svg";
import bola0 from "../../assets/bola_undone.svg";
import eyeOff from "../../assets/eye_off.svg";
import lineHG from "../../assets/line_h_green.svg";
import lineHW from "../../assets/line_h_white.svg";
import lineV from "../../assets/line_v_green.svg";

import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import api from "../../services/api";
import './style.css';



export default function SingUp() {
  const navigate = useNavigate();

  const { data, setData } = useContext(MyContext);
  const [eyePassword, setEyePassword] = useState(false)
  const [eyeConfPassword, setEyeConfPassword] = useState(false)

  const [selected, setSelected] = useState(1);

  const [mainError, setMainError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfPassword, setErrorConfPassword] = useState("");

  function changeCheck(position) {
    if (selected === 3) {
      return bola2;
    }
    if (selected < position) {
      return bola0;
    } else if (selected === position) {
      return bola1;
    } else { return bola2 }
  }

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  async function firstSubmit(e) {
    e.preventDefault();

    try {

      if (!data.name) {
        return setErrorName("Informe seu nome!");
      } else { setErrorName(""); }

      const response = await api.post("/emailVerify", { email: data.email });

      setErrorEmail("");
      setSelected(2);

    } catch (error) {
      if (error.response) {
        return setErrorEmail(error.response.data.message);
      }
    }
  }

  async function finalSubmit(e) {
    e.preventDefault();

    try {

      if (!data.password) {
        return setErrorPassword("Informe sua senha!")
      } else { setErrorPassword("") }
      if (!data.confPassword) {
        return setErrorConfPassword("Informe novamente sua senha!")
      } else { setErrorConfPassword("") }
      if (data.password !== data.confPassword) {
        return setErrorConfPassword("As senhas não conferem!")
      } else { setErrorConfPassword("") }

      const response = await api.post("/registerUser", {
        name: data.name,
        email: data.email,
        password: data.password,
        confPassword: data.confPassword
      });

      setSelected(3);

    } catch (error) {
      if (error.response) {
        return setMainError(error.response.data.message);
      }
    }
  }

  return (
    <div className="singUp">
      <div className="singUp-left">
        <div className="singUp-left-menu-check">
          <img src={changeCheck(1)} onClick={() => { setSelected((selected >= 1 && selected !== 3) ? 1 : selected) }} alt="click" />
          <img src={lineV} alt="" />
          <img src={changeCheck(2)} onClick={() => { setSelected((selected >= 2 && selected !== 3) ? 2 : selected) }} alt="click" />
          <img src={lineV} alt="" />
          <img src={changeCheck(3)} onClick={() => { setSelected((selected >= 3) ? 3 : selected) }} alt="click" />
        </div>
        <div className="singUp-left-menu-text">
          <div>
            <h1>Cadastre-se</h1>
            <h2>Por favor, escolha seu nome e e-mail</h2>
          </div>
          <div>
            <h1>Escolha uma senha</h1>
            <h2>Escolha uma senha segura</h2>
          </div>
          <div>
            <h1>Cadastro realizado com sucesso</h1>
            <h2>E-mail e senha cadastrados com sucesso</h2>
          </div>
        </div>
      </div>
      <div className={selected === 1 ? "singUp-right" : "hidden"}>
        <div className="singUp-right-form">
          <h1>Adicione seus dados</h1>
          <div className="singUp-right-form-input">
            <label htmlFor="name">Nome*</label>
            <input
              type="text"
              name="name"
              value={data.name}
              placeholder="Digite seu nome"
              onChange={handleChange}
            />
            <span className="singUp-span">{errorName}</span>
          </div>
          <div className="singUp-right-form-input">
            <label htmlFor="email">E-mail*</label>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Digite seu e-mail"
              onChange={handleChange}
            />
            <span className="singUp-span">{errorEmail}</span>
          </div>
          <button type="button" onClick={firstSubmit}>Continuar</button>
          <div className="singUp-right-navigate">
            <p>Já possui uma conta? Faça seu <a onClick={() => { navigate("/") }} className="singUp-right-navigate-click"> Login</a></p>
          </div>
        </div>
        <div className="singUp-right-row">
          <img src={(selected === 1) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 2) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 3) ? lineHG : lineHW} alt="click" />
        </div>
      </div>
      <div className={selected === 2 ? "singUp-right" : "hidden"}>
        <div className="singUp-right-form">
          <h1>Adicione seus dados</h1>
          <div className="singUp-right-form-input">
            <label htmlFor="senha">Senha*</label>
            <input
              type={eyePassword ? "text" : "password"}
              name="password"
              placeholder="Digite sua senha"
              onChange={handleChange}
            />
            <img src={eyeOff} onClick={() => { setEyePassword(!eyePassword) }} alt="" />

            <span className="singUp-span">{errorPassword}</span>
          </div>
          <div className="singUp-right-form-input">
            <label htmlFor="conf-senha">Repita a senha*</label>
            <input
              type={eyeConfPassword ? "text" : "password"}
              name="confPassword"
              placeholder="Confirme sua senha"
              onChange={handleChange}
            />
            <img src={eyeOff} onClick={() => (setEyeConfPassword(!eyeConfPassword))} alt="" />
            <span className="singUp-span">{errorConfPassword}</span>
          </div>
          <button type="button" onClick={finalSubmit}>Finalizar cadastro</button>
          <div className="singUp-right-navigate">
            <p>Já possui uma conta? Faça seu <a onClick={() => { navigate("/") }} className="singUp-right-navigate-click"> Login</a></p>
          </div>
        </div>
        <div className="singUp-right-row">
          <img src={(selected === 1) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 2) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 3) ? lineHG : lineHW} alt="click" />
        </div>
      </div>
      <div className={selected === 3 ? "singUp-right" : "hidden"}>
        <div className="singUp-right-box">
          <img src={bola4} alt="click" />
          <h1>Cadastro realizado com sucesso!</h1>
        </div>
        <button onClick={() => { navigate("/") }}>Ir para Login</button>
        <div className="singUp-right-row">
          <img src={(selected === 1) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 2) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 3) ? lineHG : lineHW} alt="click" />
        </div>
      </div>
    </div>
  );
}

