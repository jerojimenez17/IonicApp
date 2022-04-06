import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRow,
  IonSplitPane,
  IonTitle,
} from "@ionic/react";

import { useHistory, useLocation } from "react-router-dom";
import {
  add,
} from "ionicons/icons";

import { useContext, useEffect, useState } from "react";
import Product from "../../interfaces/Product";
import ProductCart from "../../interfaces/ProductCart";
import CartProvider from "../../context/CartProvider";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItems";
import CartItems from "./CartItems";

function Cart() {
  const [amount, setAmount] = useState<number>(0);
  const [suma, setSuma] = useState(0);
  const history = useHistory();

  const { cartState} = useContext(CartContext);
  useEffect(() => {
    
  }, [cartState]);

  
  return (
    <CartProvider>
      <IonCard className="itemCart">
        <IonCardTitle className="title-card" color="primary" mode="ios">
          Compra
        </IonCardTitle>
        <IonItemDivider />
{/*     
        {cartState.products.map((product) => (
          // <CartItems
          //   key={product.id}  product={product}/>
          <IonItem>Hola</IonItem>
        ))} */}
        <IonItemDivider />
        <IonButtons>
          <IonButton color="success" size="default" fill="solid">
            Venta
          </IonButton>
          <IonButton fill="solid" color="primary">
            A Cuenta
          </IonButton>
        </IonButtons>
      </IonCard>
    </CartProvider>
  );
}

export default Cart;
