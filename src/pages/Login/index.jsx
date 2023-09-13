import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import './style.css';

function Login() {
  const { data, setData } = useContext(MyContext);
  setData({ ...data, name: "Adrian" });

  return (
    <div className='container-login'>
      <div className='bgr-image'>
        <h1>Gerencie todos os pagamentos da sua empresa em um só lugar.</h1>
      </div>
      <div className='container-input'>
        <h1>Faça seu login!</h1>

        <div className='input-email'>
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder='Digite seu e-mail' />
        </div>

        <div className='input-password'>
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder='Digite sua senha' />
        </div>

        <button>Entrar</button>
        <span>Ainda não possui uma conta? Cadastre-se</span>
      </div>
    </div>
  );
}

export default Login;
