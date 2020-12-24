import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';
import avatar5 from '../images/avatar5.png';
import avatar6 from '../images/avatar6.png';
import avatar7 from '../images/avatar7.png';
import avatar8 from '../images/avatar8.png';


class JoinBox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
        window.location.replace(`http://localhost:3000/board/${this.state.value}`);
      }

    render() { 
        return (
            <div className="App">
            <Link to="/" className="back-arrow"><FontAwesomeIcon icon={faArrowLeft}/></Link>
            <header className="App-header">
                JOIN A PARTY:
                <div className="join-create-box">
                    <form className="main-code-form" onSubmit={this.handleSubmit}>
                        <label> 
                            enter your party code: <input className="main-code-input-field" type="text" name="code" placeholder="gib code" value={this.state.value} onChange={this.handleChange} />
                        </label>
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
                                    <label> 
                                        <input className="main-code-input-field" type="text" name="join-name" placeholder="your display name" />
                                        <input type="submit" value="join party" className="join-button"></input>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
            </div>
        )
    }
}
 
export default JoinBox;