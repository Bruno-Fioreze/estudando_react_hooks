import P from 'prop-types';
import './App.css';
import React, { useState, useCallback, useMemo } from 'react';

const Button = ({ incrementButton }) => {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const btn = useMemo(() => {
    <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);
  console.log('Pai, renderizou');

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
