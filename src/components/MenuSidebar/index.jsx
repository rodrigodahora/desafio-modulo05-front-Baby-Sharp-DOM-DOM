import '../../index.css';
import styles from './styles.module.css';
import home from '../../assets/home.svg';
import homeSelect from '../../assets/home_select.svg';
import client from '../../assets/cliente_menu.svg';
import clientSelect from '../../assets/clientes_selected.svg';
import charge from '../../assets/cobranca_menu.svg';
import chargeSelect from '../../assets/cobranca_select.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import { useState } from 'react';

const MenuSidebar = (selec) => {
  const navigate = useNavigate();

  const { setSelectedClient, setAttChDb, attChDb, attClDb, setAttClDb } =
    useContext(MyContext);

  const [selected, setselected] = useState(selec.selec);

  return (
    <ul className={styles.container}>
      <li
        className={
          selected === '1' ? `${styles.home}  ${styles.selected}` : styles.home
        }
        onClick={() => {
          setAttChDb(!attChDb);
          setAttClDb(!attClDb);
          navigate('/Home');
        }}
      >
        <div>
          <img src={selected === '1' ? homeSelect : home} alt="Button-home" />
        </div>
        <a className={selected === '1' ? styles.link : styles.no_link}>Home</a>
      </li>
      <li
        className={
          selected === '2' || selected === '4'
            ? `${styles.clients}  ${styles.selected}`
            : styles.clients
        }
        onClick={() => {
          setSelectedClient('');
          setAttChDb(!attChDb);
          setAttClDb(!attClDb);
          navigate('/Client');
        }}
      >
        <div>
          <img
            src={selected === '2' || selected === '4' ? clientSelect : client}
            alt="Button-client"
          />
        </div>
        <a
          className={
            selected === '2' || selected === '4' ? styles.link : styles.no_link
          }
        >
          Clientes
        </a>
      </li>
      <li
        className={
          selected === '3'
            ? `${styles.charges}  ${styles.selected}`
            : styles.charges
        }
        onClick={() => {
          setAttChDb(!attChDb);
          setAttClDb(!attClDb);
          navigate('/Charges');
        }}
      >
        <div>
          <img
            src={selected === '3' ? chargeSelect : charge}
            alt="Button-charge"
          />
        </div>
        <a className={selected === '3' ? styles.link : styles.no_link}>
          Cobranças
        </a>
      </li>
    </ul>
  );
};

export default MenuSidebar;
