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
  } from '@ionic/react';
  
  import { useHistory, useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp,peopleOutline, peopleSharp, cart, add } from 'ionicons/icons';
import Product from '../../pages/products/Product';
import { useEffect, useState } from 'react';
import ProductCart from '../../pages/products/ProductCart';
 

  function Cart(props: { product: ProductCart; }) {
    const { product } = props;
    const [amount,setAmount] = useState<number>(0);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [suma, setSuma] = useState(0);
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        console.log(product.description)
        cargaItems(product)
        Sumar(cartItems);

    }, [props.product,cartItems]);


    const cargaItems = (product: ProductCart) => {
        if (product.description != undefined) {
            let aux = cartItems;
            product.amount=1;
            aux.push(product)
            setCartItems(aux)
        }
    };
    const Sumar = (items: Product[]) => {
        let sum = 0;
        items.forEach((product:ProductCart) => {
            if (product.brand === undefined)
                sum += Number(product.price)* (product.amount || 1);

            else
                sum += Number(product.price) * 1.5;
        });
        setSuma(sum);

    };
    return (

        <IonGrid>
            <IonCard className='itemCart'>
                <IonCardTitle>Compra</IonCardTitle>
                {cartItems.map((item: ProductCart) => 
                <IonRow key={item.id} className='fila'>
                    <IonCol>{item.description}</IonCol>
                    {(item.brand === undefined) ?
                        <IonCol>{item.price}</IonCol>
                        :
                        <IonCol>{Number(item.price) * 1.5}</IonCol>}
                    <IonCol> {item.amount}</IonCol>
                    <IonButtons>
                        <IonButton fill='solid' color='success' onClick={()=>{console.log(amount)}}>
                            <IonIcon icon={add}/>
                        </IonButton>
                    </IonButtons>
                </IonRow>


                )}
                <IonItem>
                    <IonTitle>

                        Productos {cartItems.length}
                    </IonTitle>
                    {(cartItems.length !== 0) ?
                        <IonTitle>
                            Suma: {suma.toFixed()}
                        </IonTitle>
                        : <IonLabel color='primary' hidden={true}>
                            No hayproductos cargados</IonLabel>}
                </IonItem>

                <IonButtons>
                    <IonButton color='success' size='default' fill='solid'>
                        Venta
                    </IonButton>
                    <IonButton fill='solid' color='primary'>A Cuenta</IonButton>
                </IonButtons>
            </IonCard>
        </IonGrid>

    );
}
  
  export default Cart;
  