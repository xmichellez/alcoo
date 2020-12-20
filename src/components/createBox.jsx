import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class CreateBox extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className="App">
            <Link to="/" class="back-arrow"><FontAwesomeIcon icon={faArrowLeft}/></Link>
            <header className="App-header">
                CREATE A PARTY:
                <div className="App-box">
                    <div>
                        <h1> name your party: sjdfhjksdhfdkjshfjsdkhfdjkshfjkdhsf</h1>
                        <div class="container">
                        <Link to="/board"><div class="join-button">create party</div></Link>
                        </div>
                    </div>
                </div>
            </header>
            </div>
        )
    }
}
 
export default CreateBox;