import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import './style.css';

function SingIn() {
  const { data } = useContext(MyContext)

  return (
    <div className="App">
      <h1>teste</h1>
    </div>
  );
}

export default SingIn;
