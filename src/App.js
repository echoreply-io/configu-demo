import logo from './configu-icon-white.svg';
import './App.css';

const configu = process.env.REACT_APP_CONFIGU_IS;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Configu is {configu}!
        </p>
        <a
          className="App-link"
          href="https://configu.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read The Documentation
        </a>
      </header>
    </div>
  );
}

export default App;
