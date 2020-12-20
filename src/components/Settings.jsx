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
            <Link to="/board" class="back-arrow"><FontAwesomeIcon icon={faArrowLeft}/></Link>
            <header className="App-header">
                PARTY SETTINGS:
                <div className="App-box">
                    <div>
                        <h1> party name: sjdfhjksdhfdkjshfjsdkhfdjkshfjkdhsf</h1>
                        <div class="container">
                        <Link to="/"><div class="join-button">end party early :(</div></Link>
                        </div>
                    </div>
                </div>
            </header>
            </div>
        )
    }
}
 
export default Settings;