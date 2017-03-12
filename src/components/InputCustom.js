import React, { Component } from 'react';

export default class InputCustom extends Component{
  render(){
    return(
      <div>
        <label htmlFor={this.props.id}></label>
        <input id={this.props.id} type={this.props.type} name={this.props.name} className={this.props.className} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
      </div>
    );
  }
}
