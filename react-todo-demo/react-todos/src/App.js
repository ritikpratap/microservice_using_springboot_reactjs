import logo from './logo.svg';
import React, { useState } from 'react'; // required to use hooks eg. useState
import './App.css';
import TodoTable from './Components/TodoTable';
import NewTodoForm from './Components/NewTodoForm';

function App() {
  // setting state by using useState to render all the elements in todos
  const [todos, setTodos] = useState([
    {rowNumber : 1, rowDescription : "Learn React", assignedTo : "Ritik"},
    {rowNumber : 2, rowDescription : "Learn Microservices", assignedTo : "Ritik"},
    {rowNumber : 3, rowDescription : "Make a Project", assignedTo : "Ritik"},
    {rowNumber : 4, rowDescription : "Swith company", assignedTo : "Ritik"}
  ])

// created onClick Event Listener to call addNewTodo function
  const addNewTodo = () => {
    if(todos.length > 0){
      const newTodo = {
        rowNumber : todos.length+1,
        rowDescription : "New Todo",
        assignedTo : "New User"
      }
      // destructuring the current todos arrays and adding newTodo element
      setTodos(todos => [...todos, newTodo])
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
        {/* comment in jsx
          while calling a component which has props passed to it, you have to always pass props as a key value pair 
        */}
          <TodoTable todos={todos}/>
          <button className="btn btn-primary" onClick={addNewTodo}>
            Add Todo
          </button>
          <NewTodoForm/>
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default App;
