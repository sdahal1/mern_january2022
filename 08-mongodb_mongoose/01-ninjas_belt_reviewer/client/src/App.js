import logo from './logo.svg';
import './App.css';
import NewNinjaForm from './components/NewNinjaForm';
import AllNinjas from './components/AllNinjas';
import OneNinja from './components/OneNinja';
import EditNinjaForm from './components/EditNinjaForm';

import {
  BrowserRouter, //tells the application we can enable routing
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Ninjas Belt Reviewer</h1>
        <Switch>
          <Route exact path= "/">
            <NewNinjaForm></NewNinjaForm>
            <hr />
            <AllNinjas></AllNinjas>
          </Route>

          <Route exact path = "/ninjas/:id">
            <OneNinja></OneNinja>
          </Route>

          <Route exact path = "/ninjas/edit/:id">
            <EditNinjaForm/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
