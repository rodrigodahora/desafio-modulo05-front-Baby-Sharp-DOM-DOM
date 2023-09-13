<<<<<<< HEAD
// import logo from './logo.svg';
// import './App.css';

function SingIn() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import { useContext } from 'react';
import { MyContext } from '../../contexts/MyContext';
import './style.css';

function SingIn() {
  const { data } = useContext(MyContext)

  return (
    <div className="App">
      <h1>teste</h1>
>>>>>>> 6c96a24f2f45c6163c87c86cb427e0bfaa3b0114
    </div>
  );
}

export default SingIn;
