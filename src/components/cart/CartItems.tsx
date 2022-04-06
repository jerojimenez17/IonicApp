import { IonItem, IonLabel, IonList, IonRow } from '@ionic/react';
import { Console } from 'console';
import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import Product from '../../interfaces/Product';
import ProductCart from "../../interfaces/ProductCart";


interface props{
    product: Product;
}


const CartItems = ({product}:props) => {

    const { cartState } = useContext(CartContext);
    const { products } = cartState;

    useEffect(() => {
      console.log(cartState);
      
    }, [cartState]);
    
  return (
      <IonRow>
        <IonItem>
          <IonLabel>
            {product.description}
          </IonLabel>
        </IonItem>
      </IonRow>
  )
};

export default CartItems;