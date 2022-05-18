import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonRow } from '@ionic/react';
import { Console } from 'console';
import { add } from 'ionicons/icons';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import Product from '../../interfaces/Product';
import ProductCart from "../../interfaces/ProductCart";


interface props{
    product: Product;
}


const CartItems = ({product}:props) => {

    const { cartState } = useContext(CartContext);
    const { products } = cartState;
    const [rowsPerPage, setRowsPerPage] = useState(100);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
    
    useEffect(() => {
      console.log(cartState);
      
    }, [cartState]);
    const loadData = (ev: any) => {
      setTimeout(() => {
        setRowsPerPage(rowsPerPage + 100);
        console.log("Cargando Productos...");
        ev.target.complete();
      }, 500);
    };
  return (
   
    <IonGrid className="table">
    <IonRow>
      <IonCol>Codigo</IonCol>
      <IonCol>Descripcion</IonCol>
      <IonCol>Marca</IonCol>
      <IonCol>Precio</IonCol>
    </IonRow>

    {
      cartState.products.map((producto: Product, id: number) => (
        <IonRow key={producto.id} className="fila">
          <IonCol>{producto.cod} </IonCol>
          <IonCol className="description">
            {producto.description}
          </IonCol>
          <IonCol className="marca">{producto.brand}</IonCol>
          <IonCol>
            {"$" + (Number(producto.price) * 1.5).toFixed()}
          </IonCol>
          <IonButtons>f
            <IonButton
              size="small"
              fill="solid"
              color="success"
              onClick={() => {
                
    
                handleAddItem(producto);
              }}
            >
              <IonIcon icon={add} />
            </IonButton>
          </IonButtons>
        </IonRow>
      ))}
    <IonInfiniteScroll
      onIonInfinite={loadData}
      threshold="100px"
      disabled={isInfiniteDisabled}
      >
      <IonInfiniteScrollContent
        loadingSpinner="bubbles"
        loadingText="Cargando Productos..."
      ></IonInfiniteScrollContent>
    </IonInfiniteScroll>
  </IonGrid>
  )
};

export default CartItems;

function handleAddItem(producto: Product) {
  throw new Error('Function not implemented.');
}


