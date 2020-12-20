import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import HomepageBox from './components/homepageBox';
import AlcooBoard from './components/Board';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    );
  }
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        WELCOME TO ALC∞!!
        <div className="App-box">
          <HomepageBox />
        </div>
      </header>
    </div>
  )
}
function Join() {
  return (
    <div className="App">
      <AlcooBoard />
    </div>
  )
}
function Create() {
  return (
    <div className="App">
      <header className="App-header">
        you are creating lol
        <div className="App-box">
          <HomepageBox />
        </div>
      </header>
    </div>
  )
}

export default App;
