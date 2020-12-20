import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faDiceTwo } from '@fortawesome/free-solid-svg-icons';

class BoardTopBar extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
        <div className="row top-bar justify-content-between">
            <div className="col" id="settings-icon">
                <Link to="/settings"><FontAwesomeIcon icon={faCog}/></Link>
            </div>
            <div className="col" id="dice-icon">
                <FontAwesomeIcon icon={faDiceTwo}/>
            </div>
        </div>
        )
    }
}
 
export default BoardTopBar;