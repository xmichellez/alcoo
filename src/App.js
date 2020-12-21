import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import HomepageBox from './components/homepageBox';
import JoinBox from './components/joinBox';
import CreateBox from './components/createBox';
import AlcooBoard from './components/Board';
import Sidebar from './components/playerSidebar';
import Settings from './components/Settings';
import Alcoo from './Game';
import { SocketIO } from "boardgame.io/multiplayer";
import { Client } from "boardgame.io/react";


const AlcooClient = Client({
  game: Alcoo,
  board: AlcooBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

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
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/board">
            <Board />
          </Route>
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
        WELCOME TO ALC∞
        <div className="App-box">
          <HomepageBox />
        </div>
      </header>
    </div>
  )
}
function Join() {
  return (
    <JoinBox />
  )
}
function Create() {
  return (
    <CreateBox />
  )
}
function Board() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-9" id="board">
          {/* <AlcooBoard /> */}
          <AlcooClient />
        </div>
        <div className="col" id="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App;
