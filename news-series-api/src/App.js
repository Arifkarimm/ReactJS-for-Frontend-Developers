import React, { Component } from 'react';
import './App.css';


class App extends Component {

  render(){
    const message = "Welcome to Reactjs For Frontend Developers";
    return(
      <div className="App">
       <h2>{ message }</h2>
      </div>
    )
  }
}


export default App;
