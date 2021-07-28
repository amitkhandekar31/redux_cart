import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../Components/actions/cartAction'

class CartList extends Component{

     //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
       return(
                <div className="col">
                            { this.props.addedItems.map((listItem) => {
                                return (
                                    <div className="col row noPad bg1 mt-3" key={ listItem.id }>
                                        <div className="col-6">
                                            <img src="./images/veg icon.png" className="vegIcon" />
                                            <h1 className="itemName">{ listItem.item_name }</h1>
                                            <span><i className="fas fa-rupee-sign"></i> { listItem.price } </span>

                                        </div>
                                        <div className="col-6 ">
                                            <div className="col-8 ">
                                                <div className="input-group">
                                                    <span className="input-group-btn">
                                                        <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="" onClick={()=>{this.handleSubtractQuantity(listItem.id)}}>
                                                            <span><i className="fas fa-minus"></i></span>
                                                        </button>
                                                    </span>
                                                    <div className="quantity">{ listItem.quantity }</div>

                                                    {/*<input type="text" id="quantity" name="quantity" className="form-control input-number" value="0" min="1" max="100" />*/}
                                                    <span className="input-group-btn">
                                                        <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="" onClick={()=>{this.handleAddQuantity(listItem.id)}}>
                                                            <span><i className="fas fa-plus"></i></span>
                                                        </button>
                                                    </span>
                                                    <button onClick={()=>{this.handleRemove(listItem.id)}}><i className="fas fa-trash ml-3"></i></button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }) }
                        </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems

    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartList)