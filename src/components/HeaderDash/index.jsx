import React from 'react';
import { useContext, useState } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useNavigate } from 'react-router-dom';

import '../../index.css';
import styles from './styles.module.css';
import edit from '../../assets/editar.svg';
import logout from '../../assets/logout.svg';
import arrowTop from '../../assets/arrow_top.svg';
import avatar from '../../assets/avatar.svg';
import ModalEditUser from '../ModalEditUser';

const HeaderDash = () => {
  const navigate = useNavigate();

  const [modalUser, setModalUser] = useState(false);
  const { setOpenModalUser, openModalUser, selected, setSelected } =
    useContext(MyContext);

  const [name, setName] = useState(localStorage.getItem('name'));

  return (
    <React.Fragment className={styles.mod}>
      {openModalUser && <ModalEditUser setName={setName} />}
      <div className={styles.header_dash}>
        <div className={styles.container}>
          {selected === 1 && <h1>Resumo de cobranças</h1>}
          {selected === 2 && <h2>Clientes</h2>}
          {selected === 3 && <h2>Cobranças</h2>}
          {selected === 4 && (
            <div className={styles.container_colun}>
              <h2
                onClick={() => {
                  setSelected(2);
                }}
              >
                Clientes
              </h2>
              <h3>{'>'}</h3>
              <h3>Detalhes do cliente</h3>
            </div>
          )}

          <div className={styles.login}>
            <div className={styles.profile}>
              <img src={avatar} alt="Avatar User" />
            </div>
            <strong>{name}</strong>
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
