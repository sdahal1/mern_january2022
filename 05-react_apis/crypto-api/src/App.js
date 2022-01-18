import logo from './logo.svg';
import './App.css';
import CryptoCoinsUsingFetch from './components/CryptoCoinsUsingFetch';
import PokemonHint from './components/PokemonHint';

function App() {
  return (
    <div className="App">
      <h1>Hello Crypto Api demo</h1>
      {/* <CryptoCoinsUsingFetch></CryptoCoinsUsingFetch> */}
      <PokemonHint></PokemonHint>
    </div>
  );
}

export default App;
