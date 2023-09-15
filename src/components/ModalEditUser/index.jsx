import React, { useState } from 'react';
import styles from './styles.module.css';
import close from '../../assets/close.svg';
import eyeOff from '../../assets/eye_off.svg';

const ModalEditUser = () => {
  const [viewPass, setViewPass] = useState(false);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <header>
          <img className={styles.img_close} src={close} alt="Close" />
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
          <label htmlFor="email">E-mail*</label>
          <input
            className={styles.input}
            name="email"
            id="email"
            type="text"
            placeholder="Digite seu e-mail"
          />
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
              src={eyeOff}
              alt="View password"
              onClick={() => viewPass(!viewPass)}
            />
          </div>
          <label htmlFor="confirm_password">Confirmar senha*</label>
          <div className={styles.box_input}>
            <input
              name="confirm_password"
              id="confirm_password"
              type={viewPass ? 'text' : 'password'}
            />
            <img
              src={eyeOff}
              alt="View password"
              onClick={() => viewPass(!viewPass)}
            />
          </div>
        </div>
        <button className={styles.button} type="submit">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default ModalEditUser;
