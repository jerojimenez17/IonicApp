import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Supplier from './Supplier';
import {removeSupplier, searchSuppliers } from './SupplierApi';


const SuppliersList: React.FC = () => {
    
    const { name } = useParams<{ name: string; }>();

    const [proveedores,setClientes] = useState<Supplier[]>([]);
    
    const history = useHistory();

    useEffect(() => {
        search();
    }, [history.location.pathname]);
    
    const search = ()=> {
        let result = searchSuppliers();
        setClientes(result);

    }
    const remove = (id:string)=>{
        removeSupplier(id);
        search();
    }
    const addSuppliers = () =>{
        history.push('/page/suppliers/new')
    }

    const editSuppliers = (id:string)=> {
        history.push('/page/suppliers/'+id);
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
                        <IonTitle slot='end' size="large">{name}+ qu</IonTitle>
                    </IonToolbar>
                </IonHeader>



                <IonContent>
                    <IonCard>
                    <IonTitle>Gestion de Proveedores</IonTitle>

                    <IonItem>
                        <IonButton onClick={addSuppliers} color='primary' fill='solid' slot='end' size='default'>
                            <IonIcon icon={add}/>
                            Agregar Proveedor
                        </IonButton>
                    </IonItem>

                        <IonGrid className='table'>
                            <IonRow>
                                <IonCol>Nombre</IonCol>
                                <IonCol>Email</IonCol>
                                <IonCol>Telefono</IonCol>
                                <IonCol>Direccion</IonCol>
                                <IonCol>Contacto</IonCol>
                                <IonCol>Acciones</IonCol>
                            </IonRow>

                            {proveedores.map((proveedor:Supplier) =>
                                
                            <IonRow>
                                <IonCol>{proveedor.name} </IonCol>
                                <IonCol>{proveedor.email}</IonCol>
                                <IonCol>{proveedor.phone}</IonCol>
                                <IonCol>{proveedor.address}</IonCol>
                                <IonCol>{proveedor.contact}</IonCol>
                                <IonCol>
                                    <IonButton onClick={()=>editSuppliers(String(proveedor.id))} color='primary' fill='clear'>
                                        <IonIcon icon={pencil} slot='icon-only'/>
                                    </IonButton>
                                    <IonButton color='danger' fill='clear'
                                        onClick={()=>remove(String(proveedor.id))}>
                                        <IonIcon icon={close} slot='icon-only'/>
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                            )}

                        </IonGrid>
                    </IonCard>
                </IonContent>





            </IonContent>
        </IonPage>
    );
};

export default SuppliersList;
