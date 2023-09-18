import React from 'react';
import styles from './styles.module.css';
import completed from '../../assets/bola_confirmado.svg';

const ModalCompleted = ({ setCompleted, setOpenModalUser }) => {
  return (
    <div
      onClick={() => {
        setCompleted(false);
        setOpenModalUser(false);
      }}
      className={styles.container}
    >
      <div className={styles.content}>
        <img className={styles.img_completed} src={completed} alt="" />
        <h4>Cadastro Alterado com sucesso!</h4>
      </div>
    </div>
  );
};

export default ModalCompleted;
