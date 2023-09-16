import { createContext, useState } from "react";

export const MyContext = createContext();

export function ContextProvider(props) {
    const [data, setData] = useState({ name: "", email: "", password: "", confPassword: "" });
    const [selected, setSelected] = useState(1);
    const [addClient, setAddCliente] = useState(true)

    return (
        <MyContext.Provider value={{ data, setData, selected, setSelected }}>
            {props.children}
        </MyContext.Provider>
    )
}