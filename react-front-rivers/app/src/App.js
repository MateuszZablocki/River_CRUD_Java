import React, { Component } from 'react';


class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}
  }
  componentDidMount() {
	  
    fetch('http://localhost:8081/river')
    .then(res => res.json())
    .then(json => {
		this.setState({
			isLoaded: true,
			items: json,
    })
  });
  
 }

 render() {
	var { isLoaded, items } = this.state;
    if(!isLoaded){
	return <div>Loading...</div>;
	}
	else{
		
		return( 
			<div className="App">
			
				<ul>
				{items.map(item => (
					<li key={item.id}>
						Name: {item.river_name} | Length: {item.river_length}
						</li>
				))}
		 </ul>
		 
		 </div>
	
	

    );
  }
}
}

export default App;