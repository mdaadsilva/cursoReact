import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const nome = "Martin";

  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento numero={1} />
      <Evento numero={2} />
      <Form />
    </div>
  );
}

export default App;
