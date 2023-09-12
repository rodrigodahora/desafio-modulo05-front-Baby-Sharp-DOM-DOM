import {
    Navigate,
    Outlet,
    Route,
    Routes
} from "react-router-dom";
import { ContextProvider } from "./contexts/MyContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingIn from "./pages/SingIn";

const token = "true";

function ProtectedRoutes({ redirectTo }) {
    // const token = localStorage.getItem("token");

    return token ? <Outlet /> : <Navigate to={redirectTo} />
}

function NotProtectedRoutes({ redirectTo }) {
    // const token = localStorage.getItem("token");

    return token ? <Navigate to="/Home" /> : <Outlet />
}


export default function MyRoutes() {
    return (
        <ContextProvider>
            <Routes>
                <Route element={<NotProtectedRoutes />}>

                </Route>
                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SingIn" element={<SingIn />} />
                    <Route path="/Home" element={<Home />} />
                </Route>
            </Routes>
        </ContextProvider>
    )
}
