import React, { Children, useReducer } from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { CartReducer } from './CartReducer';
import CartState from "../interfaces/CartState";
import Product from "../interfaces/Product";
import ProductCart from '../interfaces/ProductCart';



const INITIAL_STATE:CartState = {
    products:[],
    amount: 0,
    total: 0,
}



interface props {
    children: JSX.Element | JSX.Element[];
}

const CartProvider = ({children}:props ) => {
    const [cartState, dispatch] = useReducer(CartReducer, INITIAL_STATE );

    const addItem = (product:Product) => {
        dispatch({
            type: 'addItem',
           payload: product,
      });
    };
  return (
    <CartContext.Provider value={{ cartState:cartState, addItem: addItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider