import { useState, useEffect } from 'react';
import './App.css';

const writer = () => {
  console.log('h1 clicado');
};

// Exemplo você quer chamar uma função sempre que o componente for atualizado, eu posso usar o useEffect.
const App = () => {
  const [counter, setCounter] = useState(0);

  // componentDidUpdate - executa toda vez que o component executa.
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMont - executa uma vez quando o component é montado.
  // useEffect(() => {
  //   console.log('componentDidMont');
  // }, []);
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', writer);

    // ComponentWillUMont - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', writer);
    };
  }, []);
  // com dependência - executa toda vez que a dependência mudar.
  // se tivesse um counter2 [counter, counter2] seria chamado assim que o counter2 fosse atualizado.
  useEffect(() => {
    console.log('componentDidMont');
  }, [counter]);

  const handleCounter = () => {
    setCounter((prevProps) => prevProps + 1);
  };

  return (
    <div className="App">
      <h1> OI4 {counter} </h1>
      <button onClick={handleCounter}> mouse over me </button>
    </div>
  );
};

export default App;
