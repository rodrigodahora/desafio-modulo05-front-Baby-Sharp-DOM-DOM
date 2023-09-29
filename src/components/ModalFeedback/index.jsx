import { useContext } from "react";
import feedbackSuccess from "../../assets/feedback_success.svg";
import feedbackError from "../../assets/feedback_error.svg";
import { MyContext } from '../../contexts/MyContext';
import feedbackSuccessClose from "../../assets/feedback_success_close.svg";
import "./style.css";

const ModalFeedback = () => {
  const { feedback, setFeedback } = useContext(MyContext);

  return (
    <div className={feedback === "Esta cobrança não pode ser excluída!" || feedback === "Não é possível atualizar cobranças com status Paga!" ? "container-feedback-red" : "container-feedback-blue"}>
      <div className="feedback-box">
        <img
          className="feedback-image"
          src={feedback === "Esta cobrança não pode ser excluída!" || feedback === "Não é possível atualizar cobranças com status Paga!" ? feedbackError : feedbackSuccess}
          alt="Feedback Success"
        />

        <span className={feedback === "Esta cobrança não pode ser excluída!" || feedback === "Não é possível atualizar cobranças com status Paga!" ? "feedback-message-error" : "feedback-message-success"}>
          {feedback}
        </span>
      </div>

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