import Item1 from '../../images/f1.jpg'
import Item2 from '../../images/f2.jpg'
import Item3 from '../../images/f3.jpg'
import Item4 from '../../images/f1.jpg'
import Item5 from '../../images/f2.jpg'
import Item6 from '../../images/f3.jpg'

// import { ADD_TO_CART} from '../actions/action-types/cart-actions'
import { SET_LIST, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from '../actions/cartAction.js'


const initState = {

  items: [],
  addedItems: [],
  total: 0,
  addedItem: []

}
const cartReducer = (state = initState, action) => {

  //INSIDE HOME COMPONENT
  if (action.type === SET_LIST) {
    // console.log('action',action.payload)
    return {
      ...state,
      items: action.payload,
      quantity: 0
    }
  }
  if (action.type === ADD_TO_CART) {
    // console.log('ADD_TO_CART',state.items)
    // console.log('id',action.id)
    let addedItem = state.items.find(item => item.id === action.id)
    console.log('state', state)
    console.log('addedItems', addedItem)
    console.log('resulty', [...state.addedItems, addedItem])


    if (addedItem) {
      addedItem.quantity = 1;

    }
    return {
      ...state,
      addedItems: [...state.addedItems, addedItem[0]]
    };
    // return {
    //   ...state,
    //    addedItem: state.items.map(product =>
    //     product.id === action.id ? {...product, selected: true} : product,
    //   ),
    // };

    //   let addedItem = state.items.find(item => item.id === action.id)
    //   //check if the action id exists in the addedItems
    //  let existed_item= state.addedItems.find(item=> action.id === item.id)
    //  if(existed_item)
    //  {
    //     // addedItem.quantity += 1 
    //     addedItem.quantity = addedItem.quantity + 1 
    //      return{
    //         ...state,
    //          total: state.total + addedItem.price,
    //           }
    // }
    //  else{
    //     addedItem.quantity = 1;
    //     //calculating the total
    //     let newTotal = state.total + addedItem.price 

    //     return{
    //         ...state,
    //         addedItems: [...state.addedItems, addedItem],
    //         total : newTotal
    //     }

    // }
    // var addedItem = state.items.find(item => item.id === action.id)
    // console.log('addedItem',addedItem)
    //   addedItem.quantity = 1;

    //   let newTotal = state.total + addedItem.price 
    //   return{
    //       ...state,
    //       addedItems: [...state.addedItems, addedItem],
    //       total : newTotal
    //   }
    // 




  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)

    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    }
    else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal
      }
    }

  }
  else {
    return state
  }
}
export default cartReducer;