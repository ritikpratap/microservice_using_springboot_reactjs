import logo from './logo.svg';
import './App.css';
import TodoRowItem from './Components/TodoRowItem';

function App() {
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
              <TodoRowItem/>
            </thead>
            <thead>
              <tr>
                <th scope="row">3</th>
                <td>Learn Java</td>
                <td>Ritik</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
