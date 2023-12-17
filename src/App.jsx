import './App.css';
import TaskList from './componentes/TaskList';
import Titulo from './componentes/Header';

const tasks = [
  { id: 1, name: 'Completar el informe de ventas', completed: false },
  { id: 2, name: 'Hacer ejercicio por 30 minutos', completed: true },
  { id: 3, name: 'Ir de compras al supermercado', completed: false },
  { id: 4, name: 'Llamar a mamá para su cumpleaños', completed: true },
  { id: 5, name: 'Revisar y responder correos electrónicos', completed: false },
  { id: 6, name: 'Preparar la cena', completed: true },
  { id: 7, name: 'Leer un capítulo del libro actual', completed: false },
  { id: 8, name: 'Hacer una caminata de 1 hora', completed: true },
];

function App() {
  return (
    <div className="App">
      <Titulo/>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;