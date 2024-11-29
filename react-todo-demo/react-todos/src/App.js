import logo from './logo.svg';
import './App.css';

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
              <tr>
                <th scope="row">1</th>
                <td>Hair Cut</td>
                <td>Ritik</td>
              </tr>
            </thead>
            <thead>
              <tr>
                <th scope="row">2</th>
                <td>Learn React</td>
                <td>Ritik</td>
              </tr>
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
