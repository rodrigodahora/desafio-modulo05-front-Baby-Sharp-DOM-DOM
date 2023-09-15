import React, { useState } from 'react';
import styles from './styles.module.css';
import '../../index.css';
import edit from '../../assets/editar.svg';
import logout from '../../assets/logout.svg';
import arrowTop from '../../assets/arrow_top.svg';

const HeaderDash = () => {
  const [modalUser, setModalUser] = useState(false);
  const [modalEditUser, setModalEditUser] = useState(false);

  return (
    <div className={styles.header_dash}>
      <div className={styles.container}>
        <h1>Resumo de cobranças</h1>

        <div className={styles.login}>
          <div className={styles.profile}>LR</div>
          <strong>Lorena</strong>
          <div
            className={styles.arrow_down}
            onClick={() => {
              setModalUser(!modalUser);
            }}
          >
            {modalUser && (
              <>
                {' '}
                <div className={styles.modal_edit_logout}>
                  <img
                    className={styles.arrowTop}
                    src={arrowTop}
                    alt="Arrow top"
                  />
                  <div className={styles.child_edit_logout}>
                    <img
                      src={edit}
                      alt="Edit"
                      onClick={() => {
                        setModalUser(false);
                        setModalEditUser(true);
                      }}
                    />
                    <img src={logout} alt="Logout" />
                  </div>
                </div>{' '}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDash;
