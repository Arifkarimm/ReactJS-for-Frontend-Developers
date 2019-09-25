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

//ES5
// function isSearched(searchTerm){
// 	return function(item){
// 		return item.title.toLowerCase().includes(searchTerm.toLowerCase());
// 	}
// }

//ES6
const isSearched = searchTerm => item => 
	item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			list,
			searchTerm:'',
		}

		this.onDismiss = this.onDismiss.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		
	}

	onSearchChange(event){
		this.setState({
			searchTerm: event.target.value
		});
	}
	onDismiss(id){
		const isNotid = item => item.objectID !== id;
		const updateList = this.state.list.filter(isNotid);
		this.setState({ list: updateList })
	}

render(){
	console.log(this.state.searchTerm);
    return(
      <div className="App">
      		<form>
      			<input type="text" placeholder="please search here" onChange={this.onSearchChange}/>
      		</form>
       {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>(
	       		<div key={item.objectID} className="fetch-item-data">
	       			<span><a href={item.title}>{item.title}</a></span>
	       			<span>{item.author}</span>
	       			<span>{item.num_commemts}</span>
	       			<span>{item.points}</span>
	       			<span>
	       				<button type="button" onClick={() => this.onDismiss(item.objectID)}>Dismiss</button>
	       			</span>
	       		</div>
	       	)
       )}
      </div>
    )
  }
}


export default App;