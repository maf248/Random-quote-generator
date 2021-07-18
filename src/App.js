import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quote here
        </p>
        <button
          className="New-quote btn btn-secondary"
        >
          New Quote
        </button>
      </main>
    </div>
  );
}

export default App;
