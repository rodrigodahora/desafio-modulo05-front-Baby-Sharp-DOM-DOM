import { useContext } from "react";
import closeIcon from "../../assets/close.svg";
import warning from "../../assets/warning.svg";
import "./style.css";
import { MyContext } from "../../contexts/MyContext";
import api from '../../services/api';

function ModalDeleteCharges() {
  const { openModalDeleteCharges, setOpenModalDeleteChanges, setFeedback } = useContext(MyContext);

  async function deleteSelectChange() {

    const token = localStorage.getItem("token");

    try {

      const response = await api.delete(`/deleteDebt/${openModalDeleteCharges}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setOpenModalDeleteChanges(!openModalDeleteCharges);

      setTimeout(() => {
        setFeedback("Cobrança excluída com sucesso!");
        setTimeout(() => {
          setFeedback("");
        }, 5000);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="filter-modal-delete-charges">
      <div className="modal-delete-charges-container">
        <div className="">
          <img
            className="modal-close"
            src={closeIcon}
            alt="Close Icon"
            onClick={() => setOpenModalDeleteChanges(!openModalDeleteCharges)}
          />
        </div>

        <img className="warning-charges-icon" src={warning} alt="Warning Icon" />
        <h4>Tem certeza que deseja excluir esta cobrança?</h4>

        <div className="modal-delete-charges-buttons">
          <button
            className="modal-delete-charges-buttons-no pointer"
            onClick={() => setOpenModalDeleteChanges(!openModalDeleteCharges)}
          >
            Não
          </button>
          <button
            className="modal-delete-charges-buttons-yes pointer"
            onClick={() => deleteSelectChange()}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDeleteCharges;