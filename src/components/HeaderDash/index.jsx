import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import '../../index.css';
import edit from '../../assets/editar.svg';
import logout from '../../assets/logout.svg';
import arrowTop from '../../assets/arrow_top.svg';
import { MyContext } from '../../contexts/MyContext';


const HeaderDash = ({ setOpenModalUser }) => {
  const navigate = useNavigate();
  const { selected, setSelected } = useContext(MyContext);
  const [modalUser, setModalUser] = useState(false);

  return (
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
