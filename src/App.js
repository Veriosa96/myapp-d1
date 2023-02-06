import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponents';
import ImgComponent from './components/ImgComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <ButtonComponent title="Hello Everyone" backgroundColor="green" border="1px solid green" borderRadius="2" width="10em" marginBottom="5" marginTop="5"  /> 
       <ImgComponent image="http://placekitten.com/200/200" linkAlt="catpic" borderRadius ="25"/>
      </header>
    </div>
  );
}

export default App;
