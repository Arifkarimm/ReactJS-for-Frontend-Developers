import React, { Component } from 'react';
import './App.css';

const list = [
	{
		title: "React",
		url: "https://reactjs.org/",
		author: "Fazlul",
		num_commemts: 4,
		points: 3,
		objectID: 0,
	},

	{
		title: "Redux",
		url: "https://redux.js.org/",
		author: "Karim",
		num_commemts: 5,
		points: 2,
		objectID: 1,
	},
];

class App extends Component {

  render(){
    return(
      <div className="App">
       {list.map(function(item){ 
	       	return(
	       		<div key={item.objectID} className="fetch-item-data">
	       			<span><a href={item.title}>{item.title}</a></span>
	       			<span>{item.author}</span>
	       			<span>{item.num_commemts}</span>
	       			<span>{item.points}</span>
	       		</div>
	       	);
       })}
      </div>
    )
  }
}


export default App;
