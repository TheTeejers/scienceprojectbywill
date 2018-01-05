import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
        <div className="App-header">

          <h1 className="App-title">
            Which Pets Are Better?
          </h1>
          <p className="siteIntro">
            A Science Experiment By William Courtright
          </p>
        </div>
    );
  }
}



export default Header;
