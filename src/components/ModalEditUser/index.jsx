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
  const { setOpenModalUser } = useContext(MyContext);

  const handleSumit = (e) => {
    e.preventDefault();

    setCompleted(true);

    setTimeout(() => {
      setOpenModalUser(false);
    }, 1000);
  };

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
          />
          <span className={styles.validation}>
            Este campo deve ser preenchido
          </span>
          <label htmlFor="email">E-mail*</label>
          <input
            className={styles.input}
            name="email"
            id="email"
            type="text"
            placeholder="Digite seu e-mail"
          />
          <span className={styles.validation}>
            Este campo deve ser preenchido
          </span>
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
            />
            <img
              className={styles.img_pass}
              src={eyeOff}
              alt="View password"
              onClick={() => setViewPass(!viewPass)}
            />
          </div>
          <span className={styles.validation}>
            Este campo deve ser preenchido
          </span>

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
          <span className={styles.validation}>
            Este campo deve ser preenchido
          </span>
        </div>
        <button className={styles.button} type="submit">
          Aplicar
        </button>
      </form>
    </div>
  );
};

export default ModalEditUser;
