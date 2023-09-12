import { createContext, useState } from "react";

export const MyContext = createContext();

export function ContextProvider(props) {
    const [data, setData] = useState({ name: "", email: "", senha: "" });
    const [selected, setSelected] = useState("1")

    return (
        <MyContext.Provider value={{ data, setData, selected, setSelected }}>
            {props.children}
        </MyContext.Provider>
    )
}