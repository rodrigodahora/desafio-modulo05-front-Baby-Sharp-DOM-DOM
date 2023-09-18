import React, { useContext, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';

import close from '../../assets/close.svg';
import eyeOff from '../../assets/eye_off.svg';
import ModalCompleted from '../ModalCompleted';
import styles from './styles.module.css';

import api from '../../services/api';

const ModalEditUser = () => {
  const [viewPass, setViewPass] = useState(false);
  const [viewConfirPass, setConfirPass] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { setOpenModalUser, isValidEmail } = useContext(MyContext);

  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfPassword, setErrorConfPassword] = useState('');

  const [data, setData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    password: '',
    confPassword: '',
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  }

  const handleSumit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    try {
      const response = await api.put(
        '/editUser',
        {
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          phone: data.phone,
          password: data.password,
          confPassword: data.confPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCompleted(true);

      setTimeout(() => {
        setOpenModalUser(false);
      }, 1000);
    } catch (error) {}
  };

  async function applySubmit(e) {
    e.preventDefault();

    try {
      if (!data.name) {
        return setErrorName('Informe seu nome!');
      } else {
        setErrorName('');
      }

      if (!data.email) {
        return setErrorEmail('Informe seu email!');
      } else {
        setErrorEmail('');
      }

      if (!isValidEmail(data.email)) {
        return setErrorEmail('Email inválido!');
      } else {
        setErrorEmail('');
      }

      if (!data.password) {
        return setErrorPassword('Informe sua senha!');
      } else {
        setErrorPassword('');
      }
      if (!data.password) {
        return setErrorConfPassword('Informe novamente sua senha!');
      } else {
        setErrorConfPassword('');
      }
      if (data.password !== data.confPassword) {
        return setErrorConfPassword('As senhas não conferem!');
      } else {
        setErrorConfPassword('');
      }

      const response = await api.post('/emailVerify', { email: data.email });

      setErrorName('');
      setErrorEmail('');
      setErrorPassword('');
      setErrorConfPassword('');
      setCompleted(true);

      setTimeout(() => {
        setCompleted(false);
      }, 10000);
    } catch (error) {
      if (error.response) {
        return setErrorEmail(error.response.data.message);
      }
    }
  }

  return completed ? (
    <ModalCompleted />
  ) : (
    <div className={styles.container}>
      <form onSubmit={handleSumit} className={styles.form}>
        <header>
          <img
            className={styles.img_close}
            src={close}
            alt="Close"
            onClick={() => setOpenModalUser(false)}
          />
          <h3>Edite seu cadastro</h3>
        </header>
        <div className={styles.colum}>
          <label htmlFor="name">Nome*</label>
          <input
            className={styles.input}
            name="name"
            id="name"
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
              type="number"
              placeholder="Digite seu CPF"
            />
          </div>

          <div className={styles.colum}>
            <label htmlFor="telphone">Telefone</label>
            <input
              className={styles.input}
              name="telphone"
              id="telphone"
              type="number"
              placeholder="Digite seu telefone"
            />
          </div>
        </div>
        <div className={styles.colum}>
          <label htmlFor="password">Nova senha*</label>
          <div className={styles.box_input}>
            <input
              name="password"
              id="password"
              type={viewPass ? 'text' : 'password'}
              onChange={handleChange}
            />
            <img
              className={styles.img_pass}
              src={eyeOff}
              alt="View password"
              onClick={() => setViewPass(!viewPass)}
              onChange={handleChange}
            />
          </div>
          <span className={styles.validation}>{setErrorPassword}</span>

          <label htmlFor="confirm_password">Confirmar senha*</label>
          <div className={styles.box_input}>
            <input
              name="confirm_password"
              id="confirm_password"
              type={viewConfirPass ? 'text' : 'password'}
            />
            <img
              className={styles.img_pass}
              src={eyeOff}
              alt="View password"
              onClick={() => setConfirPass(!viewConfirPass)}
            />
          </div>
          <span className={styles.validation}>{setErrorConfPassword}</span>
        </div>
        <button onClick={applySubmit} className={styles.button} type="submit">
          Aplicar
        </button>
      </form>
    </div>
  );
};

export default ModalEditUser;
