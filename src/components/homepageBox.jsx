import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class HomepageBox extends Component {
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
        if (!this.state.value) {
            window.location.replace("http://localhost:3000/");
        } else {
            window.location.replace(`http://localhost:3000/board/${this.state.value}`);
        }
    }

    render() { 
        return (

        <div className="App">
            <header className="App-header">
                WELCOME TO ALC∞
                <div className="App-box">
                    <h1> everyone can be an alcoholic but not everyone can be well-read. we can't fix that last one but at least we can make you drink lol</h1>
                    <div className="container">
                        <form className="main-code-form" onSubmit={this.handleSubmit}>
                            <label> 
                                enter your party code: <input className="main-code-input-field" type="text" name="code" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="join party" className="join-button"></input>
                        </form>
                    </div>
                </div>
                <Link to="/board"><div className="create-button">or create a party</div></Link>
            </header>
        </div>

        )
    }
}
 
export default HomepageBox;