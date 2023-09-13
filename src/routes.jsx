import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
// import Login from './pages/Login';
import Home from './pages/Home';
// import SingIn from './pages/SingIn';

const token = 'true';

function ProtectedRoutes({ redirectTo }) {
  // const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function NotProtectedRoutes({ redirectTo }) {
  // const token = localStorage.getItem("token");

  return token ? <Navigate to="/Home" /> : <Outlet />;
}

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NotProtectedRoutes />}></Route>
        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/" element={<Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SingIn" element={<SingIn />} /> */}
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
