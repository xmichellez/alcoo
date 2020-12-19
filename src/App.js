import React, { Component }  from 'react';
import "./App.css";
import HomepageBox from './components/homepageBox';

class App extends Component {
  constructor(props) {
    super(props);
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
