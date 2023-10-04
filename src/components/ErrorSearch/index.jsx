import "./style.css";
import "../../index.css";
import errorSearchImg from "../../assets/error_search_img.png";
import agrupamento from '../../assets/Frame.svg';


function ErrorSearch(page) {

  return (

    <div className="error_search_box">

      {page.page === "Client" &&
        <div className="header-table-error-search">
          <div className="error-search-client">
            <img className="error-search-client-img" src={agrupamento} alt="" />
            Cliente
          </div>
          <div className="error-search-cpf">CPF</div>
          <div className="error-search-email">E-mail</div>
          <div className="error-search-phone">Telefone</div>
          <div className="error-search-status">Status</div>
          <div className="error-search-new-charge">Criar Cobrança</div>
        </div>
      }

      <img src={errorSearchImg} alt="" />

      <h1 className="error_search_text_result">Nenhum resultado foi encontrado!</h1>
      <h2 className="error_search_text_correct">Verifique se escrita está correta</h2>

    </div>

  );
}

export default ErrorSearch;