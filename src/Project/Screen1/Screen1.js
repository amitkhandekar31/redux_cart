import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { setList } from '../Components/actions/cartAction'
import { addToCart } from '../Components/actions/cartAction'

import './Screen1.css';

class Screen1 extends Component {
	constructor() {
		super();
		this.state = {
			listCart: []
		}
	}

	componentDidMount() {

		axios
			.get('https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7')
			.then(resultData => {
				// console.log("resultData",resultData.data);
				const slicedArray = resultData.data.slice(0, 3);
				this.props.setList(slicedArray);

			})
			.catch((error) => {
				console.log("error = ", error);

			});


	}

	handleClick = (id) => {
		this.props.addToCart(id);
	}



	removeItem(id) {
		var myArr = this.state.list;
		var index = myArr.findIndex(function (o) {
			return o.id === id;
		})
		if (index !== -1) myArr.splice(index, 1);

		console.log('myArr', myArr);
	}

	render() {
		console.log('props', this.props);

		return (
			<div className="container-fluid">
				<div className="col headerS1">
					<div className="box1">
						<h2>McDonald's</h2>
						<div className="col-4 row header2 pt-2">
							<div className="col-2"><i className="fas fa-star"></i> 4.3</div>
							<div className="col-3"> | 35 mins</div>
							<div className="col-4">| <i className="fas fa-rupee-sign"></i> 400 for two</div>
						</div>
						<div className="row col">
							<input type="text"
								placeholder="Search for dishes"
								className="col-4"
							/>
							<div className="bg col-1 ml-2 ">
								<input type="checkbox"
									className="mt-3"
								/>
								<span className="ml-1">Veg Only</span>
							</div>
							<button className="bg col-1 ml-2">
								<i className="fas fa-rupee-sign"></i> Favourite
							</button>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						{ this.props.items.map((listItem) => {
							return (
								<div className="col row noPad bg1 mt-3" key={ listItem.id }>
									<div className="col-9">
										<img src="./images/veg icon.png" className="vegIcon" />
										<h1 className="itemName">{ listItem.item_name }</h1>
										<span><i className="fas fa-rupee-sign"></i> { listItem.price } </span>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem </p>

									</div>
									<div className="col-3 ">
										<img src="./images/food.webp" className="imgP mt-4" />
										<div className="col-8 plus">
											<div className="input-group">
												<span className="input-group-btn">
													<button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="" >
														<span><i className="fas fa-minus"></i></span>
													</button>
												</span>
												<div className="quantity">{ listItem.quantity }</div>
												{/*<input type="text" id="quantity" name="quantity" className="form-control input-number" value={listItem.quantity} min="1" max="100" />*/ }
												<span className="input-group-btn">
													<button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="" onClick={ () => { this.handleClick(listItem.id) } }>
														<span><i className="fas fa-plus"></i></span>
													</button>
												</span>


											</div>
										</div>
									</div>

								</div>
							)
						}) }
					</div>
					<div className="col-4 bg2 mt-3">
						<h1>Carts :</h1>
						<div className="col">
							{ this.state.listCart.map((listItem) => {
								return (
									<div className="col row noPad bg1 mt-3">
										<div className="col-6">
											<img src="./images/veg icon.png" className="vegIcon" />
											<h1 className="itemName">{ listItem.name }</h1>
											<span><i className="fas fa-rupee-sign"></i> { listItem.price } </span>

										</div>
										<div className="col-6 ">
											<div className="col-8 ">
												<div className="input-group">
													<span className="input-group-btn">
														<button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="">
															<span><i className="fas fa-minus"></i></span>
														</button>
													</span>
													<input type="text" id="quantity" name="quantity" className="form-control input-number" value="0" min="1" max="100" />
													<span className="input-group-btn">
														<button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
															<span><i className="fas fa-plus"></i></span>
														</button>
													</span>
													<button onClick={ () => this.removeItem(listItem.id) }><i className="fas fa-trash ml-3"></i></button>
												</div>
											</div>
										</div>

									</div>
								)
							}) }
						</div>

					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('state', state)

	return {
		items: state.items
	}
}

const mapDispatchToProps = (dispatch) => {
	console.log('dispatch', dispatch)

	return {
		setList: (slicedArray) => {
			dispatch(setList(slicedArray))
		},
		addToCart: (id) => {
			dispatch(addToCart(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)

