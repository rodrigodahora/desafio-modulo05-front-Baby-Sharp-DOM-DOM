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
      const response = await api.post("/login", data.email, data.password);
      navigate("/Home");
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <div className='container-login'>
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
          <span>{errorEmail}</span>
        </div>

        <div className='input-box'>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name='senha'
            placeholder='Digite sua senha'
            onChange={handleChange}
          />
          <span>{errorPassword}</span>
        </div>

        <button
          type='submit'
          onClick={handleSubmit}
        >
          Entrar
        </button>
        <p>Ainda não possui uma conta? <a onClick={() => { navigate("/SingIn") }}>Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default Login;
