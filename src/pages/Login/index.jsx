import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import '../../index.css';
import './style.css';

function Login() {
  const { data, setData } = useContext(MyContext);
  setData({ ...data, name: "Adrian" });

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
          <input type="email" placeholder='Digite seu e-mail' />
          <span>Este campo deve ser preenchido</span>
        </div>

        <div className='input-box'>
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder='Digite sua senha' />
          <span>teste</span>
        </div>

        <button>Entrar</button>
        <p>Ainda não possui uma conta? <a href="/SingIn">Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default Login;
