import logo from './logo.svg';
import './App.css';
import TodoRowItem from './Components/TodoRowItem';

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
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assinged to</th>
              </tr>
            </thead>
            <thead>
              <TodoRowItem
                rowNumber = {todos[0].rowNumber}
                rowDescription = {todos[0].rowDescription}
                assignedTo = {todos[0].assignedTo}
              />
              <TodoRowItem
                rowNumber = {todos[1].rowNumber}
                rowDescription = {todos[1].rowDescription}
                assignedTo = {todos[1].assignedTo}
              />
              <TodoRowItem
                rowNumber = {todos[2].rowNumber}
                rowDescription = {todos[2].rowDescription}
                assignedTo = {todos[2].assignedTo}
              />
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
