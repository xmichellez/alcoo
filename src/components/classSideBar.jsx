import React, { Component, useEffect } from 'react';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';
import avatar5 from '../images/avatar5.png';
import avatar6 from '../images/avatar6.png';
import avatar7 from '../images/avatar7.png';
import avatar8 from '../images/avatar8.png';

class CSidebar extends Component {
    constructor(props) {
        super(props);
    }

    // const playerID = parseInt(props.boardProps.ctx.playerID);
    // const playerInfos = props.boardProps.G.playerInfos;
    // let playerstorender;

    // useEffect(() => {
    //     if (!playerInfos.hasOwnProperty(playerID)) {
    //         console.log(props.boardProps.G);
    //         props.boardProps.moves.initializePlayer();
    //         console.log(props.boardProps.G);

    //         // console.log(props.boardProps.G.playerInfos[0]);
    //         const players = Object.entries(props.boardProps.G.playerInfos);
    //         // console.log(players);

    //         playerstorender = players.map((player) => (
    //             <playerProfiles player={player} />
    //         ));
    //     }
    // }, [props.boardProps.moves, playerID]);
    render() {
        return (
        <div className="sidebar-column">
            <div className="party-name-div">
                <div className="party-name">
                    {partyName()}
                </div>
            </div>
            <div className="players-div">
                {activePlayers(this.props.boardProps)}
                <button className="drink-button" onClick={this.props.boardProps.moves.initializePlayer} >JOIN GAME</button>
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
    return(
        <div className="profile row">
            <div className="col-3">
                <img src={loadImage(props.avatar)} alt="avatar" className="picture" />
            </div>
            <div className="col">
                <div className="name">{props.name}</div>
                <div className="drinks">drinks: {props.drinks}</div>
            </div>
        </div>
    );
}

function activePlayers(props) {
    const playerID = parseInt(props.ctx.playerID);
    const playerInfos = props.G.playerInfos;

    console.log(playerInfos);

    const players = Object.entries(playerInfos);
    console.log(players);

    const torender = players.map((player) => { 
        playerProfiles(playerInfos[player])
    }
    
    return torender;
}

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
  
export default CSidebar;