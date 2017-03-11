import React, { Component } from 'react';
import logo from '../images/logo.jpg';

export default class Header extends Component{
  render(){
    return(
      <div className="github col-lg-4 col-xs-12 center-block">
        <img src={logo} className="App-logo" alt="Github + React" />
      </div>
    );
  }
}
