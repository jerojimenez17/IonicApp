
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { add, cart, close, pencil } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import Cart from '../../components/cart/Cart';
import ExploreContainer from '../../components/ExploreContainer';
import Product from './Product';

//require('./jm.json')
let data: Product[] = require('./jm.json');


const ProductsJMList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();


    const history = useHistory();


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(100);
    const [searchText, setSearchText] = useState('');

    const [productToCart,setProductToCart] = useState<Product>({});
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);


    useEffect(() => {
        
    }, [ searchText, productToCart]);
    /* 
    const search = async ()=> {
        let result = await searchSuppliers();
        setProveedores(result);

    }
   const remove = async(id:string)=>{
        await removeSupplier(id);
        search();
    }
    const addSupplier = () =>{
        history.push('/page/supplier/new')
    }

    const editSupplier = (id:string)=> {
        history.push('/page/supplier/'+id);
    }
    */
    const loadData = (ev: any) => {
        setTimeout(() => {
            setRowsPerPage(rowsPerPage+100);
            console.log('Cargando Productos...');
            ev.target.complete();
        }, 500);
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                    <IonTitle size='large'>JM</IonTitle>
                </IonHeader>


                <IonContent>
                    <IonSearchbar value={searchText} onIonChange={(e: any) => setSearchText(e.detail.value)} placeholder="Buscar..." showCancelButton="focus"></IonSearchbar>
                    <IonFab className='floatingButton' vertical="top" horizontal="start" edge slot="fixed">
                        <IonFabButton>
                            <IonIcon icon={cart} />
                        </IonFabButton>
                        <IonFabList side="end">
                            <Cart product={productToCart}/>
                        </IonFabList>
                    </IonFab>
                    <IonCard>
                        <IonTitle className='title'>Lista Juan Ignacio</IonTitle>

                        <IonItem>
                            <IonButton color='primary' fill='solid' slot='end' size='default'>
                                <IonIcon icon={add} />
                                Agregar proveedor
                            </IonButton>
                        </IonItem>

                        <IonGrid className='table' >
                            <IonRow>
                                <IonCol>Codigo</IonCol>
                                <IonCol>Descripcion</IonCol>
                                <IonCol>Marca</IonCol>
                                <IonCol>Precio</IonCol>
                            </IonRow>

                            {data

                                .filter(
                                    (producto: Product) => {

                                        return (producto.description?.toString().toLocaleLowerCase().includes(searchText.toLowerCase()) || (producto.cod?.toString().toLocaleLowerCase().includes(searchText.toLowerCase())|| (producto.brand?.toString().toLocaleLowerCase().includes(searchText.toLowerCase()))))
                                    })
                                .slice(0,rowsPerPage)
                                .map((producto: Product, id: number) =>


                                        <IonRow key={producto.id} className='fila'>
                                            <IonCol>{producto.cod} </IonCol>
                                            <IonCol className='description'>{producto.description}</IonCol>
                                            <IonCol className='marca'>{producto.brand}</IonCol>
                                            <IonCol>{"$" + (Number(producto.price) * 1.5).toFixed()}</IonCol>
                                            <IonButtons>
                                                <IonButton size='small' fill='solid' color='success'  onClick={(e)=>{
                                                    setProductToCart(producto)
                                                    }}>
                                                    
                                                    <IonIcon icon={add}/>
                                                </IonButton>
                                            </IonButtons>
                                        
                                        </IonRow>


                                )
                                }
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
                    </IonCard>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};


export default ProductsJMList;