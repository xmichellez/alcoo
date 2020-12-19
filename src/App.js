import React, { Component }  from 'react';
import "./App.css";

import HomepageBox from './components/homepageBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          WELCOME TO ALC∞!!
          <div className="App-box">
            <HomepageBox />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
