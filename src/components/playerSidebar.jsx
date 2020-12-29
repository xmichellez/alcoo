import React, { Component, useEffect } from 'react';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';
import avatar5 from '../images/avatar5.png';
import avatar6 from '../images/avatar6.png';
import avatar7 from '../images/avatar7.png';
import avatar8 from '../images/avatar8.png';

function Sidebar (props) {
    const playerID = props.boardProps.ctx.playerID;
    const playerInfos = props.boardProps.G.playerInfos;
    useEffect(() => {
        if (!playerInfos.hasOwnProperty(playerID)) {
            props.boardProps.moves.initializePlayer();
        }
    }, [playerInfos, props.boardProps.moves, playerID]);
      
    return (
    <div className="sidebar-column">
        <div className="party-name-div">
            <div className="party-name">
                {partyName()}
            </div>
        </div>
        <div className="players-div">
            {/* <button className="drink-button" onClick={props.boardProps.moves.initializePlayer} >JOIN GAME</button> */}
            <button className="drink-button" onClick={props.boardProps.moves.startMatch} >START GAME</button>
            {activePlayers(props)}
        </div>
    </div>
    )
}

function partyName() {
    return(
        'zoomer boomer pArtAY'
    );
}
export function playerProfiles(props) {
    return(
        <div className="profile row">
            <div className="col-3">
                <img src={"avatar" + props.player.avatar} alt="avatar" className="picture" />
            </div>
            <div className="col">
                <div className="name">{props.player.name}</div>
                <div className="drinks">{props.player.drinks}</div>
            </div>
        </div>
    );
}

export function activePlayers(props) {
    const players = Array.from(props.boardProps.G.playerInfos);
    // console.log(players);
    players.map((player) => (
        <playerProfiles player={player} />
    ));
}

export default Sidebar;