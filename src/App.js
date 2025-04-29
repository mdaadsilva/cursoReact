import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {

  const nome = "Lucas"

  return (
    <div className="App">
      <h1>Olá React</h1>
      <Frase/>
      <Frase/>

      <SayMyName nome="Martin"/>
      <SayMyName nome="Marcos"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Martin" idade="20" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  )
}

export default App;
