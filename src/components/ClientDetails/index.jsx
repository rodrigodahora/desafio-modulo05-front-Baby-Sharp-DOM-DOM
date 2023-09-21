import clientIcon from "../../assets/cliente_menu.svg";
import editIcon from "../../assets/icone_edit.svg"
import plus from "../../assets/add.svg"
import HeaderDash from '../HeaderDash';
import MenuSidebar from '../MenuSidebar';
import "../../index.css";
import "./style.css";

const ClientDetails = () => {

  return (

    <div className="client_details">

      <div className="container-client-detail">

        <div className="title-client-detail">
          <img src={clientIcon} alt="Client Icon" />
          <h1>
            {/* nome que vem do banco de dados */}
          </h1>
        </div>

        <div className="client-detail-body">

          <div className="container-data-client">
            <div className="title-data-client-box">
              <h2>Dados do cliente</h2>
              <button>
                <img src={editIcon} alt="" />
                Editar Cliente
              </button>
            </div>

            <div className="data-line-email">
              <span className="data-line">E-mail</span>
              <span className="data-line">Telefone</span>
              <span className="data-line">CPF</span>
            </div>
            <div className="data-content-email">
              <p className="data-content">
                {/* email cliente selecionado */}
              </p>
              <p className="data-content">
                {/* telefone cliente selecionado */}
              </p>
              <p className="data-content">
                {/* CPF cliente selecionado */}
              </p>
            </div>

            <div className="data-line-address">
              <span className="data-line">Endereço</span>
              <span className="data-line">Bairro</span>
              <span className="data-line">Complemento</span>
              <span className="data-line">CEP</span>
              <span className="data-line">Cidade</span>
              <span className="data-line">UF</span>
            </div>
            <div className="data-content-address">
              <p className="data-content">
                {/* endereço cliente selecionado */}
              </p>
              <p className="data-content">
                {/* bairro cliente selecionado */}
              </p>
              <p className="data-content">
                {/* complemento cliente selecionado */}
              </p>
              <p className="data-content">
                {/* cep cliente selecionado */}
              </p>
              <p className="data-content">
                {/* cidade cliente selecionado */}
              </p>
              <p className="data-content">
                {/* uf cliente selecionado */}
              </p>
            </div>

          </div>


          <div className="container-changes-client">

            <div className="title-data-change-box">
              <h2>Cobrança do Cliente</h2>
              <button>
                <img src={plus} alt="" />
                Nova cobrança
              </button>
            </div>

            {/* tabela com as cobranças do cliente selecionado */}

          </div>

        </div>

      </div>
    </div>
  );
}

export default ClientDetails;