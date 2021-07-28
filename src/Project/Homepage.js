import React , { Component }	from 'react';
import Screen1 from './Screen1/Screen1.js';
// import CartDemo from './CartDemo/CartDemo.js';

class Homepage extends Component {
	constructor(){
		super();
		this.state = {
		}
	}

	render() {

		return (
			<div>
				<Screen1 />
			</div>
		);
	}
}
export default Homepage;
