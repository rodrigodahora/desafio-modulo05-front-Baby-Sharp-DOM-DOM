import clientIcon from "../../assets/cliente_menu.svg";

const ClientModal = () => {
  return (
    <div className="container-client-modal">
      <div>
        <img src="" alt="" />
      </div>

      <form>
        <div>
          <img src={clientIcon} alt="Client Icon" />
          <h1>Cadastro do Cliente</h1>
        </div>

      </form>
    </div>
  );
}

export default ClientModal;