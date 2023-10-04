import { useContext, useEffect, useState } from 'react';
import headarCharges from '../../assets/cobranca_menu.svg';
import filter from '../../assets/filter.svg';
import search from '../../assets/pesquisar.svg';
import ChargesTable from '../../components/ChargesTabel';
import HeaderDash from '../../components/HeaderDash';
import MenuSidebar from '../../components/MenuSidebar';
import { MyContext } from '../../contexts/MyContext';
import styles from './styles.module.css';
import ModalDeleteCharges from '../../components/ModalDeleteCharges';
import ModalFeedback from '../../components/ModalFeedback';
import DetailChargesModal from '../../components/DetailChargesModal';
import EditChargesModal from '../../components/EditChargesModal';
import ErrorSearch from "../../components/ErrorSearch";
import api from '../../services/api';


const Charges = () => {
  const { openModalDeleteCharges, feedback, openModalDetail, charge, dbSearch, setDbSearsh, search, setSearch } =
    useContext(MyContext);

  useEffect(() => {
    searchSubmit();
  }, [search]);

  async function searchSubmit() {
    console.log(search);
    if (!search) { return setDbSearsh("") }
    console.log(search);
    try {
      const response = await api.post(
        "/searchDebt",
        { data: search },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }

      );

      setDbSearsh(response.data.search)
      if (response.data.search.length === 0) { setDbSearsh("") }

    } catch (error) {
      setDbSearsh("")
    }

  }

  return (
    <div className={styles.container}>
      <HeaderDash selec="3" />
      <MenuSidebar selec="3" />
      <div className={styles.charges_body}>
        <div className={styles.charges_body_header}>
          <div>
            <img src={headarCharges} alt="" /> Cobranças
          </div>
          <div>
            <img src={filter} alt="" />
            <div className={styles.charges_box_input}>
              <input
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <img src={search} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.charges_body_table}>
          {(search && !dbSearch ? <ErrorSearch /> : <ChargesTable />)}
        </div>
      </div>
      {openModalDeleteCharges && <ModalDeleteCharges />}
      {feedback && <ModalFeedback />}
      {openModalDetail && <DetailChargesModal />}
      {charge && <EditChargesModal />}
    </div>
  );
};

export default Charges;
