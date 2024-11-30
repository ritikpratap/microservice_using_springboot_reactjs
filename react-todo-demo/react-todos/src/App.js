import logo from './logo.svg';
import './App.css';
import TodoTable from './Components/TodoTable';

function App() {
  const todos = [
    {rowNumber : 1, rowDescription : "Learn React", assignedTo : "Ritik"},
    {rowNumber : 2, rowDescription : "Learn Microservices", assignedTo : "Ritik"},
    {rowNumber : 3, rowDescription : "Make a Project", assignedTo : "Ritik"}
  ]
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
        </div>
      </div>
    </div>
  );
}

export default App;
