import React, { Component } from 'react';
import logo from '../images/logo.jpg';

export default class Header extends Component{
  render(){
    return(
      <div>
        <header className="col-lg-12">
          <div className="github col-lg-4 center-block">
            <img src={logo} className="App-logo" alt="Github + React" />
          </div>
        </header>

      </div>
    );
  }
}
