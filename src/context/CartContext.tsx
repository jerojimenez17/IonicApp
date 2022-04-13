import { createContext } from "react";
import CartState from "../interfaces/CartState";
import Product from "../interfaces/Product";
import ProductCart from "../interfaces/ProductCart";

export default interface CartContextProps{
    cartState: CartState;
    addItem: (product: Product) =>  void;
}


export  const CartContext = createContext<CartContextProps>({} as CartContextProps);
