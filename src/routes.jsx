import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/MyContext';
import Home from './pages/Home';
import Login from './pages/Login';
import SingUp from './pages/SingUp';
import Client from './pages/Client';
import Charges from './pages/Charges';

function ProtectedRoutes({ redirectTo }) {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function NotProtectedRoutes({ redirectTo }) {
  const token = localStorage.getItem('token');

  return token ? <Navigate to="/Home" /> : <Outlet />;
}

export default function MyRoutes() {
  return (
    <ContextProvider>
      <Routes>
        <Route element={<NotProtectedRoutes />}>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SingUp" element={<SingUp />} />
        </Route>

        <Route element={<ProtectedRoutes redirectTo={'/'} />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Charges" element={<Charges />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}
