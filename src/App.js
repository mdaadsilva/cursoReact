import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Lucas";

  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/500';

  return (
    <div className="App">
      <h2>Alterando Jsx</h2>
      <p>Olá {newName}, tudo bem?</p>
      <p>O resultado da soma é: {sum(1, 2)}</p>
      <img src={url} alt="mInha Imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
