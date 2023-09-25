import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import api from "../../services/api";
import './style.css';

function Login() {
  const navigate = useNavigate();

  const { data, setData } = useContext(MyContext);

  const [mainError, setMainError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      if (!data.email) {
        return setErrorEmail('O campo deve ser preenchido!');
      } else { setErrorEmail(""); }
      if (!data.password) {
        return setErrorPassword('O campo deve ser preenchido!');
      } else { setErrorPassword(""); }

      const response = await api.post("/login", { email: data.email, password: data.password });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("email", data.email);

      navigate("/Home");

    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Email ou senha inválido!") {
        setMainError(error.response.data.message);
      }

    }
  }

  return (
    <div className='Login'>
      <div className='bgr-image'>
        <div className='bgr-filter'>
          <h1>Gerencie todos os pagamentos da sua empresa em um só lugar.</h1>
        </div>
      </div>
      <div className='container-input'>
        <h1>Faça seu login!</h1>

        <div className='input-box'>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name='email'
            value={data.email}
            placeholder='Digite seu e-mail'
            onChange={handleChange}
          />
          <span>{!errorEmail ? mainError : errorEmail}</span>
        </div>

        <div className='input-box'>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name='password'
            placeholder='Digite sua senha'
            maxLength={10}
            onChange={handleChange}
          />
          <span>{!errorPassword ? mainError : errorPassword}</span>
        </div>

        <button
          type='submit'
          onClick={handleSubmit}
        >
          Entrar
        </button>
        <p>Ainda não possui uma conta? <a onClick={() => { navigate("/singup") }}>Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default Login;
