
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { add, cart, close, pencil } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import Cart from '../../components/cart/Cart';
import ExploreContainer from '../../components/ExploreContainer';
import Product from "../../interfaces/Product";
//require('./jm.json')
let data: Product[] = require('./cerrajeria.json');


const ProductsCerrajeria: React.FC = () => {



    const history = useHistory();


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(100);
    const [searchText, setSearchText] = useState('');


    const INITIAL_STATE: Product = {
        id: 0,
        cod: '',
        description: '',
        price: '',
    }
    const [productToCart,setProductToCart] = useState<Product>(INITIAL_STATE);

    
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
    const reloadList = ()=>{
        history.push('/page/changeList')
    }
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
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large"></IonTitle>
                    </IonToolbar>
                    <IonTitle size='large' className='title'>Cerrajeria</IonTitle>
                </IonHeader>


                <IonContent>
                    <IonSearchbar className='search-bar' value={searchText} onIonChange={(e: any) => setSearchText(e.detail.value)} placeholder="Buscar..." showCancelButton="focus"></IonSearchbar>

                    <IonCard>
                        <IonTitle className='title'>Lista Cerrajeria</IonTitle>

                        <IonItem>
                            <IonButton color='primary' fill='solid' slot='end' size='default' onClick={reloadList}>
                                <IonIcon icon={add} />
                                Actualizar lista Cerrajeria
                            </IonButton>
                        </IonItem>

                        <IonList className='table' >
                            <IonItem>
                                <IonCol>Codigo</IonCol>
                                <IonCol>Codigo Real</IonCol>
                                <IonCol>Descripcion</IonCol>
                                <IonCol>Precio</IonCol>

                            </IonItem>

                            {data

                                .filter(
                                    (producto: Product) => {

                                        return (producto.description?.toString().toLocaleLowerCase().includes(searchText.toLowerCase()) || (producto.cod?.toString().toLocaleLowerCase().includes(searchText.toLowerCase())))
                                    })
                                .slice(0,rowsPerPage)
                                .map((producto: Product, id: number) =>


                                        <IonItem key={producto.id} className='fila'>
                                            <IonCol>{producto.cod} </IonCol>
                                            <IonCol>{producto.codReal}</IonCol>
                                            <IonCol className='description'>{producto.description}</IonCol>
                                            <IonCol>{"$" + (Number(producto.price)).toFixed()}</IonCol>
                                            <IonButtons>
                                                <IonButton size='small' fill='solid' color='success'  onClick={(e)=>{
                                                    setProductToCart(producto)
                                                    }}>
                                                    
                                                    <IonIcon icon={add}/>
                                                </IonButton>
                                            </IonButtons>
                                        
                                        </IonItem>


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
                        </IonList>
                    </IonCard>
                </IonContent>
            </IonContent>
        </IonPage>
    );
};


export default ProductsCerrajeria;