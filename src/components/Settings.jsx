import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className="App">
            <Link to="/board" className="back-arrow"><FontAwesomeIcon icon={faArrowLeft}/></Link>
            <header className="App-header">
                PARTY SETTINGS:
                <div className="App-box">
                    <div>
                        {/* <h1> party name: sjdfhjksdhfdkjshfjsdkhfdjkshfjkdhsf</h1> */}
                        <div className="container">
                        <Link to="/"><div className="join-button">leave party early :(</div></Link>
                        </div>
                    </div>
                </div>
            </header>
            </div>
        )
    }
}
 
export default Settings;