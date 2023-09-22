import headarCharges from '../../assets/cobranca_menu.svg';
import search from '../../assets/pesquisar.svg';
import filter from '../../assets/filter.svg';

import HeaderDash from '../../components/HeaderDash';
import MenuSidebar from '../../components/MenuSidebar';

import styles from './styles.module.css';

import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import ChargesTable from '../../components/ChargesTabel';

const Charges = () => {
  const { setSelected } = useContext(MyContext);

  setSelected(3);

  return (
    <div className={styles.container}>
      <div className={styles.charges_body}>
        <div className={styles.charges_body_header}>
          <div>
            <img src={headarCharges} alt="" /> Cobranças
          </div>
          <div>
            <img src={filter} alt="" />
            <div className={styles.charges_box_input}>
              <input type="text" placeholder="Pesquisar" />
              <img src={search} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.charges_body_table}>
          <ChargesTable />
        </div>
      </div>
      <HeaderDash />
      <MenuSidebar />
    </div>
  );
};

export default Charges;
