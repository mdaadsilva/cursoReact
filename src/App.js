import './App.css';
import SayMyName from './components/SayMyName';
import Frase from './components/Pessoa';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Lucas"

  return (
    <div className="App">
      <SayMyName nome="Martin"/>
      <SayMyName nome="Marcos"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Martin" idade="20" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  )
}

export default App;
