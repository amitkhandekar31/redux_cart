import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToCart } from '../Components/actions/cartAction'

class HomePage extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        console.log("props", this.props)
        let itemList = this.props.items.map(item => {
            return (
                <div className="card col-6 row" key={ item.id }>
                    <div className="card-image col-5">
                        <img src={ item.img } alt={ item.title } />
                        <span className="card-title">{ item.title }</span>
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={ () => { this.handleClick(item.id) } } ><i className="material-icons">add</i></span>
                    </div>

                    <div className="card-content col">
                        <p>{ item.desc }</p>
                        <p><b>Price: { item.price }$</b></p>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box row">
                    { itemList }
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
