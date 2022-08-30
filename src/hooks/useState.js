import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="App">
      <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
      <p> {counter} </p>
      <button onClick={handleClick} onMouseOver={handleIncrement}>
        click me
      </button>
    </div>
  );
};

export default App;
