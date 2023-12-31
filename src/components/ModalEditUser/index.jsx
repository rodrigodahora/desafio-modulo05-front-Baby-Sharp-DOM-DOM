import { useContext, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';

import close from '../../assets/close.svg';
import eyeOff from '../../assets/eye_off.svg';
import ModalCompleted from '../ModalCompleted';
import styles from './styles.module.css';

import api from '../../services/api';

const ModalEditUser = ({ setName }) => {
  const [viewPass, setViewPass] = useState(false);
  const [viewConfirPass, setConfirPass] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { setOpenModalUser,
    isValidEmail,
    isValidCpf,
    isValidPhone,
    maskCPF,
    maskPhone,
    maskZipCode, } =
    useContext(MyContext);

  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfPassword, setErrorConfPassword] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const [data, setData] = useState({
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    cpf: cpf,
    phone: phone,
    password: '',
    confPassword: '',
  });


  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  async function applySubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      if (!data.name) {
        return setErrorName('Informe seu nome!');
      } else { setErrorName(''); }

      if (data.email) {
        if (!isValidEmail(data.email)) {
          return setErrorEmail('Email inválido!');
        } else { setErrorEmail(''); }
      }

      if (cpf) {
        if (!isValidCpf(cpf)) {
          return setErrorCpf('CPF inválido!');
        } else { setErrorCpf(''); }
      }

      if (phone) {
        if (!isValidPhone(phone)) {
          return setErrorPhone('Telefone inválido!');
        } else { setErrorPhone(''); }
      }

      if (data.password && data.password.length < 6) {
        return setErrorPassword("Senha deve conter no minimo 6 caracteres!")
      } else { setErrorPassword("") }

      if (data.password && data.password !== data.confPassword) {
        return setErrorConfPassword('As senhas não conferem!');
      } else { setErrorConfPassword(''); }

      const response = await api.put(
        '/editUser',
        {
          name: data.name,
          email: data.email,
          cpf: cpf,
          phone: phone,
          password: data.password,
          confPassword: data.confPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setName(data.name);
      localStorage.setItem('name', data.name);
      localStorage.setItem('email', data.email);

      setErrorName('');
      setErrorEmail('');
      setErrorPassword('');
      setErrorConfPassword('');
      setCompleted(true);

      setTimeout(() => {
        setCompleted(false);
        setOpenModalUser(false);
      }, 5000);

    } catch (error) {
      if (error.response.data.message === 'Email já cadastrado!') {
        return setErrorEmail(error.response.data.message);
      } else { setErrorEmail(''); }

      if (error.response.data.message === 'Cpf já Cadastrado!') {
        return setErrorCpf(error.response.data.message);
      } else { setErrorCpf(''); }

      if (error.response.data.message === 'Telefone já cadastrado!') {
        return setErrorPhone(error.response.data.message);
      } else { setErrorPhone(''); }
    }
  }

  return completed ? (
    <ModalCompleted
      setCompleted={setCompleted}
      setOpenModalUser={setOpenModalUser}
    />
  ) : (
    <div className={styles.container}>
      <form className={styles.form}>
        <header>
          <h3>Edite seu cadastro</h3>
          <img
            className={styles.img_close}
            src={close}
            alt="Close"
            onClick={() => setOpenModalUser(false)}
          />
        </header>
        <div className={styles.colum}>
          <label htmlFor="name">Nome*</label>
          <input
            className={styles.input}
            name="name"
            id="name"
            value={data.name}
            type="text"
            placeholder="Digite seu nome"
            onChange={handleChange}
          />
          <span className={styles.validation}>{errorName}</span>
          <label htmlFor="email">E-mail*</label>
          <input
            className={styles.input}
            name="email"
            id="email"
            value={data.email}
            type="text"
            placeholder="Digite seu e-mail"
            onChange={handleChange}
          />
          <span className={styles.validation}>{errorEmail}</span>
        </div>
        <div className={styles.row}>
          <div className={styles.colum}>
            <label htmlFor="cpf">CPF</label>
            <input
              className={styles.input}
              name="cpf"
              id="cpf"
              type="text"
              value={cpf}
              placeholder="Digite seu CPF"
              onChange={((e) => { setCpf(maskCPF(e.target.value)) })}
            />
            <span className={styles.validation}>{errorCpf}</span>
          </div>

          <div className={styles.colum}>
            <label htmlFor="telphone">Telefone</label>
            <input
              className={styles.input}
              name="phone"
              id="phone"
              type="text"
              value={phone}
              placeholder="Digite seu telefone"
              onChange={((e) => { setPhone(maskPhone(e.target.value)) })}
            />
            <span className={styles.validation}>{errorPhone}</span>
          </div>
        </div>
        <div className={styles.colum_validation}>
          <label htmlFor="password">Nova senha*</label>
          <input
            name="password"
            id="password"
            type={viewPass ? 'text' : 'password'}
            placeholder="Digite sua senha"
            onChange={handleChange}
          />
          <img
            className={styles.img_pass}
            src={eyeOff}
            alt="View password"
            onClick={() => setViewPass(!viewPass)}
          />
          <span className={styles.validation}>{errorPassword}</span>
        </div>
        <div className={styles.colum_validation}>
          <label htmlFor="confirm_password">Confirmar senha*</label>
          <input
            name="confPassword"
            id="confPassword"
            type={viewConfirPass ? 'text' : 'password'}
            placeholder="Confirme sua senha"
            onChange={handleChange}
          />
          <img
            className={styles.img_pass}
            src={eyeOff}
            alt="View password"
            onClick={() => setConfirPass(!viewConfirPass)}
          />
          <span className={styles.validation}>{errorConfPassword}</span>
        </div>
        <button onClick={applySubmit} className={styles.button} type="submit">
          Aplicar
        </button>
      </form>
    </div>
  );
};

export default ModalEditUser;
