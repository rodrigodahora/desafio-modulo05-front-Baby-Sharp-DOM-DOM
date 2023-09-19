import React from 'react';
import { useContext, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useNavigate } from 'react-router-dom';

import '../../index.css';
import styles from './styles.module.css';
import edit from '../../assets/editar.svg';
import logout from '../../assets/logout.svg';
import arrowTop from '../../assets/arrow_top.svg';
import ModalEditUser from '../ModalEditUser';

const HeaderDash = () => {
  const navigate = useNavigate();

  const [modalUser, setModalUser] = useState(false);
  const { setOpenModalUser, openModalUser, selected } = useContext(MyContext);

  return (
    <React.Fragment className={styles.mod}>
      {openModalUser && <ModalEditUser />}
      <div className={styles.header_dash}>
        <div className={styles.container}>
          {selected === 1 && <h1>Resumo de cobranças</h1>}
          {selected === 2 && <h2>Clientes</h2>}
          {selected === 3 && <h1>Resumo de cobranças</h1>}

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
                          setOpenModalUser(true);
                        }}
                      />
                      <img
                        src={logout}
                        onClick={() => {
                          localStorage.clear();
                          navigate('/');
                        }}
                        alt="Logout"
                      />
                    </div>
                  </div>{' '}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderDash;
