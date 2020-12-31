import React, { Component, useEffect }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import HomepageBox from './components/homepageBox';
import Alcoo from "./Game";
import AlcooBoard from './components/Board';
import Settings from './components/Settings';

import { Client } from "boardgame.io/react";
import { Local, SocketIO } from "boardgame.io/multiplayer";
import { LobbyClient } from "boardgame.io/client";

const SERVER = 'http://localhost:8000';

export class Match extends Component {
  constructor(props) {
    super(props);
    this.joinMatch(props.matchID, props.lobbyClient);
    this.state = {
      playerID: undefined,
      playerCredentials: undefined,
    };
    this.AlcooClient = Client({
      game: Alcoo,
      numPlayers: 8,
      board: AlcooBoard,
      multiplayer: Local(),
      // multiplayer: SocketIO({ server: SERVER }),
      debug: false,
    });
  }

  async joinMatch(matchID, LobbyClient) {
    // Get the game to know how many players have joined already.
    let match;
    
    try {
      match = await LobbyClient.getMatch("default", matchID);
    } catch (e) {
      alert(
        "There was a problem. Make sure you have the right url and try again."
      );
      window.location.replace(`${SERVER}/`);
      return;
    }
    
    let playerID;
    let playerCredentials;

    playerID = "0";
    const thereIsRoom = match.players.some((player, i) => {
      playerID = i.toString();
      return !player.hasOwnProperty("name");
    });
    
    if (!thereIsRoom) {
      alert("This game is full!");
      return;
    }

    let resp;
    try {
      resp = await LobbyClient.joinMatch("default", matchID, {
        playerID,
        playerName: playerID,
      });

    } catch (e) {
      alert("Could not join the game. Try again.");
    }

    // If we get here it means we successfully joined the match.
    playerCredentials = resp.playerCredentials.toString();
    // console.log(playerCredentials + playerID);
    this.setState({
      playerCredentials,
      playerID,
    });
  }
  
  render() {
    if (this.state.playerID == null) {
      return <div>Loading...</div>;
    } else {
      return (
        <this.AlcooClient
          playerID={this.state.playerID}
          matchID={this.props.matchID}
          credentials={this.state.playerCredentials}
        />
      );
    }
  }
}

const DoAction = (props) => {
  useEffect(() => {
    props.action();
  });
  return <>{props.children}</>;
};


class App extends Component {

  constructor(props) {
    super(props);
    this.LobbyClient = new LobbyClient({ server: SERVER });
  }

  async createMatch(){
    let matchID;
    try {
      const resp = await this.LobbyClient.createMatch("default", {
        // This is the maximum number of players. We will adjust the turns if less players
        // join.
        numPlayers: 8,
      });
      matchID = resp.matchID;
      // console.log(matchID);
    } catch (e) {
      alert("There was a problem creating the match. Please try again.");
      return;
    }

    return matchID;
  }

  render() {
    const lobbyClient = this.LobbyClient;
    return (
      <Router>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route
            path="/board"
            exact={true}
            render={() => {
              return (
                <DoAction
                  action={async () => {
                    const matchID = await this.createMatch();
                    if (matchID != null) {
                      // window.location.replace(`${SERVER}/board/${matchID}`);
                      window.location.replace(`http://localhost:3000/board/${matchID}`);
                    }
                  }}
                >
                  <div>Creating Match...</div>
                </DoAction>
              );
            }}
          />
          <Route
            path="/board/:matchID"
            render={(props) => {
              const { matchID } = props.match.params;
              return (
                <Match {...{ matchID, lobbyClient }}/>
              );
            }}
          />
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
    <HomepageBox />
  )
}

export default App;
