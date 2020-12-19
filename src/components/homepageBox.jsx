import React, { Component } from 'react';

class HomepageBox extends Component {
    constructor(props) {
        super(props);
        this.clickJoin = this.clickJoin.bind(this);
        this.clickCreate = this.clickCreate.bind(this);
    }

    clickJoin() {
        this.clickJoin = this.clickJoin.bind(this);
        console.log('join was clicked');
    }
    clickCreate() {
        this.clickCreate = this.clickCreate.bind(this);
        console.log('create was clicked');
    }

    render() { 
        return (
        <div>
            <h1> everyone can be an alcoholic but not everyone can be well-read. we can't fix that last one but at least we can make you drink lol</h1>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-3 homepage-button" onClick={this.clickJoin}>
                        join a<br></br>party
                    </div>
                    <div class="col-sm-3 homepage-button" onClick={this.clickCreate}>
                        create a<br></br>party
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
 
export default HomepageBox;