import React, { Component } from 'react';

export default class EyesOnMe extends Component{

  handleFocus = () => {
      console.log('Good!')
  }

  handleBlur = () => {
      console.log('Hey! Eyes on me!')
  }

  handleKeyUp = () => {
      console.log('Entering password...')
  }
  render(){
    return(
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Focus Button</button>
    )
  }
}






// Code EyesOnMe Component Here
