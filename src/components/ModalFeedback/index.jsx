import { useContext } from "react";
import feedbackSuccess from "../../assets/feedback_success.svg";
import { MyContext } from '../../contexts/MyContext';
import feedbackSuccessClose from "../../assets/feedback_success_close.svg";
import "./style.css";


const ModalFeedback = () => {
  const { setFeedback } = useContext(MyContext);

  return (
    <div className="container-feedback">
      <img
        className="feedback-success-image"
        src={feedbackSuccess}
        alt="Feedback Success"
      />

      <span className="feedback-message-success">
        Cadastro concluído com sucesso
      </span>

      <img
        className="feedback-success-image-close"
        src={feedbackSuccessClose}
        alt="Feedback Success Close"
        onClick={() => setFeedback(false)}
      />
    </div>
  );
}

export default ModalFeedback;