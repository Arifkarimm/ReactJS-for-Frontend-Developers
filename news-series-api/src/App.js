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
	const { list, searchTerm } = this.state;
    return(
      <div className="App">
      		<Search 
      			value={searchTerm} 
      			onChange={this.onSearchChange} 
      		/>

      		<Table 
      			list={list} 
      			pattern={searchTerm} 
      			onDismiss={this.onDismiss} 
      		/>
      
      </div>
    )
  }
}



class Search extends Component{
	render(){
		const { value, onChange } = this.props;
		return(
			<form>
      			<input 
      				type="text" 
      				value={value} 
      				placeholder="please search here" 
      				onChange={onChange}
      			/>
      		</form>
		)
	}
}


class Table extends Component{
	render(){
		const { list, pattern, onDismiss } = this.props;
		return(
			<div>
			 {list.filter(isSearched(pattern)).map(item =>(
	       		<div key={item.objectID} className="fetch-item-data">
	       			<span><a href={item.title}>{item.title}</a></span>
	       			<span>{item.author}</span>
	       			<span>{item.num_commemts}</span>
	       			<span>{item.points}</span>
	       			<span>
	       				<button 
	       					type="button" 
	       					onClick={() => onDismiss(item.objectID)}>
	       					Dismiss
	       				</button>
	       			</span>
	       		</div>
	       		)
       		)}
			</div>
		)
	}
}

export default App;