import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSquare, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

class BoardTopBar extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
        <div className="row top-bar justify-content-between" onClick={this.props.boardProps.moves.rollDie}>
            <div className="col" id="settings-icon">
                <Link to="/settings"><FontAwesomeIcon icon={faCog}/></Link>
            </div>
            <div className="col" id="dice-icon">
                {returnDie(this.props.boardProps.G.diceValue)}
            </div>
        </div>
        )
    }
}

function returnDie(value) {

    if (value === 1) {
        return <FontAwesomeIcon icon={faDiceOne}/>
    }
    else if (value === 2) {
        return <FontAwesomeIcon icon={faDiceTwo}/>
    }
    else if (value === 3) {
        return <FontAwesomeIcon icon={faDiceThree}/>
    }
    else if (value === 4) {
        return <FontAwesomeIcon icon={faDiceFour}/>
    }
    else if (value === 5) {
        return <FontAwesomeIcon icon={faDiceFive}/>
    }
    else if (value === 6) {
        return <FontAwesomeIcon icon={faDiceSix}/>
    }
    else {
        return <FontAwesomeIcon icon={faSquare}/>
    }
} 
 
export default BoardTopBar;