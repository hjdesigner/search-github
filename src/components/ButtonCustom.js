import React, { Component } from 'react';

export default class ButtonCustom extends Component{
  render(){
    return(
      <span className="input-group-btn">
        <button type={this.props.type} className={this.props.className}>{this.props.label}</button>
      </span>
    );
  }
}
