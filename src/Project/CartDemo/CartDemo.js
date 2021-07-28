import React , { Component }	from 'react';
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import Cart from './Cart.js';
import Recipe from './Recipe.js';

class CartDemo extends Component {
	constructor(){
		super();
		this.state = {
		}
	}

	render() {

		return (
			<div>
			<Navbar />
			<Homepage />
			<Cart />
			<Recipe />
			</div>
		);
	}
}
export default CartDemo;
