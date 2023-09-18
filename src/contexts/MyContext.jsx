import { createContext, useState } from 'react';

export const MyContext = createContext();

export function ContextProvider(props) {
  const [data, setData] = useState({ name: "", email: "", password: "", confPassword: "" });
  const [selected, setSelected] = useState(1);
  const [addClient, setAddClient] = useState(false)
  const [feedback, setFeedback] = useState(false);
  const [openModalUser, setOpenModalUser] = useState(false);

  return (
    <MyContext.Provider value={{
      data, setData, selected, setSelected, addClient, setAddClient, feedback, setFeedback,
      openModalUser,
      setOpenModalUser
    }}>
      {props.children}
    </MyContext.Provider>
  )
}
