import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class HomepageBox extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
        <div>
            <h1> everyone can be an alcoholic but not everyone can be well-read. we can't fix that last one but at least we can make you drink lol</h1>
            <div className="container">
                <div className="row align-items-center">
                    <Link to="/join" className="col-sm-3">
                        <div className="homepage-button">
                            join a<br></br>party
                        </div>
                    </Link>
                    <Link to="/create" className="col-sm-3">
                        <div className="homepage-button">
                            create a<br></br>party
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}
 
export default HomepageBox;