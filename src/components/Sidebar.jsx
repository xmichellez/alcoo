import React, { Component, useEffect } from 'react';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';
import avatar5 from '../images/avatar5.png';
import avatar6 from '../images/avatar6.png';
import avatar7 from '../images/avatar7.png';
import avatar8 from '../images/avatar8.png';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const playerID = parseInt(this.props.boardProps.ctx.playerID);
        const playerInfos = this.props.boardProps.G.playerInfos;
        const players = Object.entries(playerInfos);

        var render = null;

        if (players[0] != null) {
            render = players.map((player) => (playerProfiles(player))
            );
        }

        return (
        <div className="sidebar-column">
            <div className="party-name-div">
                <div className="party-name">
                    {partyName()}
                </div>
            </div>
            <div className="players-div">
                {/* {activePlayers(this.props.boardProps)} */}
                {render}
                {/* <button className="drink-button" onClick={this.props.boardProps.moves.initializePlayer} >JOIN GAME</button> */}
                <button className="drink-button" onClick={this.props.boardProps.moves.startMatch} >START GAME</button>
                {/* {playerstorender} */}
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
function playerProfiles(props) {
    console.log("hello from player profiles")
    const profile = props[1];
    console.log(profile);
    console.log(profile.name);
    return(
        <div className="profile row">
            <div className="col-3">
                <img src={loadImage(profile.avatar)} alt="avatar" className="picture" />
            </div>
            <div className="col">
                <div className="name">{profile.name}</div>
                <div className="drinks">drinks: {profile.drinks}</div>
            </div>
        </div>
    );
}

// function activePlayers(props) {
//     const playerID = parseInt(props.ctx.playerID);
//     const playerInfos = props.G.playerInfos;

//     console.log(playerInfos);

//     const players = Object.entries(playerInfos);
//     console.log(players);

//     // const render = players.map((player) => { 
//     //     playerProfiles(player)
//     // });
//     if (players[0] != null) {
//         return playerProfiles(players[0]);
//     }
//     return;
// }

const images = {
    avatar1: require('../images/avatar1.png'),
    avatar2: require('../images/avatar2.png'),
    avatar3: require('../images/avatar3.png'),
    avatar4: require('../images/avatar4.png'),
    avatar5: require('../images/avatar5.png'),
    avatar6: require('../images/avatar6.png'),
    avatar7: require('../images/avatar7.png'),
    avatar8: require('../images/avatar8.png'),
  };
  
export function loadImage(imageName) {
    if (images.hasOwnProperty(imageName)) {
        return images[imageName];
    }
    return;
}
  
export default Sidebar;