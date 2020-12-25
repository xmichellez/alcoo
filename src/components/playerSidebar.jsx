import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
        <div className="sidebar-column">
            <div className="party-name-div">
                <div className="party-name">
                    {partyName()}
                </div>
            </div>
            <div className="players-div">
                {playerProfiles()}
                {playerProfiles()}
                {playerProfiles()}
                {playerProfiles()}
            </div>
            <div className="players-div">
                <button className="profile" onClick={this.props.boardProps.moves.startMatch} >start game</button>
            </div>
        </div>
        )
    }
}

function partyName() {
    return(
        'zoomer boomer pArtAY'
    );
}
function playerProfiles() {
    return(
        <div className="profile row">
            <div className="col-3 picture">
                image here lol
            </div>
            <div className="col">
                <div className="name">horleb</div>
                <div className="drinks">drinks: 8</div>
            </div>
        </div>
    );
}
 
export default Sidebar;