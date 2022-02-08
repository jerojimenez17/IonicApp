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
  import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp,peopleOutline, peopleSharp, cart } from 'ionicons/icons';
import Product from '../../pages/products/Product';
import { useEffect, useState } from 'react';
 
  
interface ContainerProps {
    product: Product;
  }
  
  function Cart(props: { product: Product; }) {
    const { product } = props;

    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [suma, setSuma] = useState(0);
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        console.log(product.description)
        cargaItems(product)
        Sumar(cartItems);

    }, [props.product,cartItems]);
    const cargaItems = (product: Product) => {
        if (product.description != undefined) {
            let aux = cartItems;
            aux.push(product)
            setCartItems(aux)
        }
    };
    const Sumar = (items: Product[]) => {
        let sum = 0;
        items.forEach((product) => {
            if (product.brand === undefined)
                sum += Number(product.price);

            else
                sum += Number(product.price) * 1.5;
        });
        setSuma(sum);

    };
    return (
        <IonGrid>
            <IonCard className='itemCart'>
                <IonCardTitle>Compra</IonCardTitle>
                {cartItems.map((item: Product) => <IonRow key={item.id} className='fila'>
                    <IonCol>{item.description}</IonCol>
                    {(item.brand === undefined) ?
                        <IonCol>{item.price}</IonCol>
                        :
                        <IonCol>{Number(item.price) * 1.5}</IonCol>}
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
  