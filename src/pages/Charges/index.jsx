import { useContext, useState } from 'react';
import headarCharges from '../../assets/cobranca_menu.svg';
import filter from '../../assets/filter.svg';
import search from '../../assets/pesquisar.svg';
import ChargesTable from '../../components/ChargesTabel';
import HeaderDash from '../../components/HeaderDash';
import MenuSidebar from '../../components/MenuSidebar';
import { MyContext } from '../../contexts/MyContext';
import styles from './styles.module.css';
import DetailChargesModal from '../../components/DetailChargesModal';

const Charges = () => {
  const { setSelected, openDetailCharModal, setOpenDetailCharModal } =
    useContext(MyContext);

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
      {openDetailCharModal && <DetailChargesModal />}
    </div>
  );
};

export default Charges;
