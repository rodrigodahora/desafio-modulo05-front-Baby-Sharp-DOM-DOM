import { useContext } from 'react';
import styles from './styles.module.css';
import close from '../../assets/close.svg';
import charges from '../../assets/cobranca_menu.svg';
import { MyContext } from '../../contexts/MyContext';

const DetailChargesModal = () => {
  const { openDetailCharModal, setOpenDetailCharModal } = useContext(MyContext);
  return (
    <div className={styles.container}>
      <form className={styles.form_detail}>
        <header>
          <img
            className={styles.img_close}
            src={close}
            alt="Close icon"
            onClick={() => setOpenDetailCharModal(!openDetailCharModal)}
          />
          <div className={styles.title_detail}>
            <img src={charges} alt="Charges Detail" />
            <h6> Detalhe da cobrança</h6>
          </div>
        </header>
        <div className={styles.detail_from_colum}>
          <span>Nome</span>
          <p>{openDetailCharModal.name}</p>
          <span> Descrição</span>
          <p className={styles.detail_from_colum_desc}>
            {openDetailCharModal.description}
          </p>
        </div>

        <div className={styles.detail_from_row}>
          <div className={styles.detail_from_colum_1}>
            <span>Vencimento</span>
            <p>{openDetailCharModal.date}</p>
          </div>
          <div className={styles.detail_from_colum_1}>
            <span>Valor</span>
            <p>{`R$ ${Number(openDetailCharModal.values)
              .toFixed(2)
              .replace('.', ',')}`}</p>
          </div>
        </div>
        <div className={styles.detail_from_row}>
          <div className={styles.detail_from_colum_1}>
            <span>ID cobranças</span>
            <p>{openDetailCharModal.id}</p>
          </div>
          <div className={styles.detail_from_colum_1}>
            <span>Status</span>
            <div className={styles.detail_status}>
              {openDetailCharModal.status}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetailChargesModal;
