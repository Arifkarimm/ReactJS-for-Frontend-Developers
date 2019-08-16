import React, { Component } from 'react';
import './App.css';


class App extends Component {

	constructor(){
		super();

    this.onClickMe = this.onClickMe.bind(this);
		
	}

	
	onClickMe(){
		console.log(this);
	}
	

  render(){
    return(
      <button type="button" onClick={this.onClickMe}>Click me</button>
    )
  }
}


export default App;