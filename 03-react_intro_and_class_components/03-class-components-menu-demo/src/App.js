// import logo from './logo.svg';
// import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  
  return (
    <div className="App">
     <h1>Dojo Diner- The finest food of the JavaScript Developers</h1>

     {/* information you pass down to a component is called props  */}
     <MenuItem price = {15.99} dish = {"Spicy Salmon Roll"} ></MenuItem>
     <hr />
     <MenuItem price = {12.99} dish = {"Squash"}></MenuItem>
      <hr />
      <MenuItem price = {8.99} dish = {"Crab Rangoon"} ></MenuItem>
      <hr />
      <MenuItem price = {20.99} dish = {"Momo"}></MenuItem>
      <hr />
    </div>
  );
}

export default App;
