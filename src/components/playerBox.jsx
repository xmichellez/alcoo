import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import Modal from 'react-bootstrap/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';
import avatar5 from '../images/avatar5.png';
import avatar6 from '../images/avatar6.png';
import avatar7 from '../images/avatar7.png';
import avatar8 from '../images/avatar8.png';

class PlayerBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partyName: '',
            avatar: '',
            displayName: '',
            show: true
        };
    }
    updateAvatar(playerAvatar) {
        this.setState({
            avatar: playerAvatar
        });
        console.log(this.state.avatar);
    }
    updateDisplayName(evt) {
        this.setState({
            displayName: evt.target.value
        });
        console.log(this.state.displayName);
    }
    handleClose(props, name, avatar) {
        props.initializePlayer(name, avatar);
        this.setState({
            show: false
        });
    }

    render() { 

        return (
            <Modal show={this.state.show}>
                <div className="join-create-box">
                    <h1>set up your player:</h1>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-7 avatar-div">
                            <div className="row">
                                <img src={avatar1} alt="avatar1" className="col avatar" onClick={() => {this.updateAvatar("avatar1")}}/>
                                <img src={avatar2} alt="avatar2" className="col avatar" onClick={() => {this.updateAvatar("avatar2")}}/>
                                <img src={avatar3} alt="avatar3" className="col avatar" onClick={() => {this.updateAvatar("avatar3")}}/>
                                <img src={avatar4} alt="avatar4" className="col avatar" onClick={() => {this.updateAvatar("avatar4")}}/>
                            </div>
                            <div className="row">
                                <img src={avatar5} alt="avatar5" className="col avatar" onClick={() => {this.updateAvatar("avatar5")}}/>
                                <img src={avatar6} alt="avatar6" className="col avatar" onClick={() => {this.updateAvatar("avatar6")}}/>
                                <img src={avatar7} alt="avatar7" className="col avatar" onClick={() => {this.updateAvatar("avatar7")}}/>
                                <img src={avatar8} alt="avatar8" className="col avatar" onClick={() => {this.updateAvatar("avatar8")}}/>
                            </div>
                        </div>
                        <div className="col right-column">
                            <form>
                                <label> 
                                    <input className="main-code-input-field" type="text" name="create-name" placeholder="your display name" value={this.state.displayName} onChange={evt => this.updateDisplayName(evt)} />
                                </label>
                            </form>
                            <div className="join-button" onClick={() => {this.handleClose(this.props.boardProps.moves, this.state.displayName, this.state.avatar)}} ><FontAwesomeIcon icon={faArrowRight}/></div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default PlayerBox;