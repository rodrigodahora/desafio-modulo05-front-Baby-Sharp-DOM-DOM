import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';
import './style.css';
import { useNavigate } from "react-router-dom";
import bola0 from "../../assets/bola_undone.svg";
import bola1 from "../../assets/bola_done.svg";
import bola2 from "../../assets/bola_check.svg";
import bola4 from "../../assets/bola_confirmado.svg";
import lineV from "../../assets/line_v_green.svg";
import lineHG from "../../assets/line_h_green.svg";
import lineHW from "../../assets/line_h_white.svg";



export default function SingIn() {
  const navigate = useNavigate();

  const { data, setData } = useContext(MyContext);

  const [selected, setSelected] = useState(3);

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


  return (
    <div className="SingIn">
      <div className="SingIn-left">
        <div className="SingIn-left-menu-check">
          <img src={changeCheck(1)} onClick={() => { setSelected((selected >= 1) ? 1 : selected) }} alt="click" />
          <img src={lineV} alt="" />
          <img src={changeCheck(2)} onClick={() => { setSelected((selected >= 2) ? 2 : selected) }} alt="click" />
          <img src={lineV} alt="" />
          <img src={changeCheck(3)} onClick={() => { setSelected((selected >= 3) ? 3 : selected) }} alt="click" />
        </div>
        <div className="SingIn-left-menu-text">
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
      <div className={selected === 1 ? "SingIn-right" : "hidden"}>
        <div className="SingIn-right-form">
          <h1>Adicione seus dados</h1>
          <div className="SingIn-right-form-input">
            <label htmlFor="name">Nome*</label>
            <input type="text" name="name" />
          </div>
          <div className="SingIn-right-form-input">
            <label htmlFor="email">E-mail*</label>
            <input type="email" name="email" />
          </div>
          <button>Continuar</button>
          <div className="SingIn-right-navigate">
            <p>Já possui uma conta? Faça seu <a onClick={() => { navigate("/") }} className="SingIn-right-navigate-click"> Login</a></p>
          </div>
        </div>
        <div className="SingIn-right-row">
          <img src={(selected === 1) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 2) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 3) ? lineHG : lineHW} alt="click" />
        </div>
      </div>
      <div className={selected === 2 ? "SingIn-right" : "hidden"}>
        <div className="SingIn-right-form">
          <h1>Adicione seus dados</h1>
          <div className="SingIn-right-form-input">
            <label htmlFor="senha">Senha*</label>
            <input type="password" name="senha" />
          </div>
          <div className="SingIn-right-form-input">
            <label htmlFor="conf-senha">Repita a senha*</label>
            <input type="password" name="conf-senha" />
          </div>
          <button>Finalizar cadastro</button>
          <div className="SingIn-right-navigate">
            <p>Já possui uma conta? Faça seu <a onClick={() => { navigate("/") }} className="SingIn-right-navigate-click"> Login</a></p>
          </div>
        </div>
        <div className="SingIn-right-row">
          <img src={(selected === 1) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 2) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 3) ? lineHG : lineHW} alt="click" />
        </div>
      </div>
      <div className={selected === 3 ? "SingIn-right" : "hidden"}>
        <div className="SingIn-right-box">
          <img src={bola4} alt="click" />
          <h1>Cadastro realizado com sucesso!</h1>
        </div>
        <button onClick={() => { navigate("/") }}>Ir para Login</button>
        <div className="SingIn-right-row">
          <img src={(selected === 1) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 2) ? lineHG : lineHW} alt="click" />
          <img src={(selected === 3) ? lineHG : lineHW} alt="click" />
        </div>
      </div>
    </div>
  );
}

