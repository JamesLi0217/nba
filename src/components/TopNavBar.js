import React, {Component} from 'react';
import logo from "../assets/images/nba-logoman-word-white.svg";



class TopNavBar extends Component {
    render() {
        return (
            <header className="App-header">
                <a href = "https://www.nba.com/players" target="_blank"><img src={logo} className="App-logo" alt="logo" /></a>
            </header>
        );
    }
}

export default TopNavBar;