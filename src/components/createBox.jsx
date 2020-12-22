import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../public/avatar1.png';
import avatar2 from '../public/avatar2.png';
import avatar3 from '../public/avatar3.png';
import avatar4 from '../public/avatar4.png';
import avatar5 from '../public/avatar5.png';
import avatar6 from '../public/avatar6.png';
import avatar7 from '../public/avatar7.png';
import avatar8 from '../public/avatar8.png';

class CreateBox extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div className="App">
                <Link to="/" className="back-arrow"><FontAwesomeIcon icon={faArrowLeft}/></Link>
                <header className="App-header">
                    CREATE A PARTY:
                    <div className="join-create-box">
                        <form className="main-code-form">
                            <label> 
                                enter your party name: <input className="main-code-input-field" type="text" name="name" placeholder="gib name" />
                            </label>
                        </form>
                        {/* <h1> enter your party code: sjdfhjksdhfdkjshfjsdkhfdjkshfjkdhsf</h1> */}
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-7 avatar-div">
                                    <div className="row">
                                        <img src={avatar1} alt="avatar1" className="col avatar" />
                                        <img src={avatar2} alt="avatar2" className="col avatar" />
                                        <img src={avatar3} alt="avatar3" className="col avatar" />
                                        <img src={avatar4} alt="avatar4" className="col avatar" />
                                    </div>
                                    <div className="row">
                                        <img src={avatar5} alt="avatar5" className="col avatar" />
                                        <img src={avatar6} alt="avatar6" className="col avatar" />
                                        <img src={avatar7} alt="avatar7" className="col avatar" />
                                        <img src={avatar8} alt="avatar8" className="col avatar" />
                                    </div>
                                </div>
                                <div className="col right-column">
                                    <form>
                                        <label> 
                                            <input className="main-code-input-field" type="text" name="create-name" placeholder="your display name" />
                                        </label>
                                    </form>
                                    <Link to="/board"><div className="join-button">create party</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
 
export default CreateBox;