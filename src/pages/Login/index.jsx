import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import './style.css';

function Login() {
  const { data, setData } = useContext(MyContext);
  setData({ ...data, name: "Adrian" });

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}

export default Login;
