import { useContext, useState } from "react";
import "./style.css";
import feedbackSuccess from "../../assets/feedback_success.svg";
import feedbackSuccessClose from "../../feedback_success_close.svg";
import { MyContext } from '../../contexts/MyContext';


const ModalFeedback = () => {
  const { addClient, setAddClient, feedback, setFeedback } = useContext(MyContext);

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