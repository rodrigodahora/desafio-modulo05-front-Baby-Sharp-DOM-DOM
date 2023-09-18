import { createContext, useState } from 'react';

export const MyContext = createContext();

export function ContextProvider(props) {
  const [data, setData] = useState({ name: "", email: "", password: "", confPassword: "" });
  const [selected, setSelected] = useState(1);
  const [addClient, setAddClient] = useState(false)
  const [feedback, setFeedback] = useState(false);
  const [openModalUser, setOpenModalUser] = useState(false);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidCpf(cpf) {
    const cpfRegex = /^(?:(?:\d{3}.){2}\d{3}-\d{2}|(\d{11}))$/;
    return cpfRegex.test(cpf);
  }

  function isValidPhone(phone) {
    const phoneRegex = /^[(]?(?:\d{2}[)]?[-. ]?)?\d{5}[-. ]?\d{4}$/;
    return phoneRegex.test(phone);
  }

  // if (!data.email) {
  //   return setErrorEmail("Informe seu email!");
  // } else { setErrorEmail(""); }

  // if (!isValidEmail(data.email)) {
  //   return setErrorEmail("Email inválido!");
  // } else { setErrorEmail(""); }

  return (
    <MyContext.Provider value={{
      data,
      setData,
      selected,
      setSelected,
      addClient,
      setAddClient,
      feedback,
      setFeedback,
      openModalUser,
      setOpenModalUser,
      isValidEmail,
      isValidCpf,
      isValidPhone
    }}>
      {props.children}
    </MyContext.Provider>
  )
}
