import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil, text } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Supplier from './Supplier';
import {searchSuppliers, searchSupplierById,saveSupplier } from './SupplierApi';


const SupplierEdit: React.FC = () => {
    
    const { name, id } = useParams<{ name: string; id:string }>();

    const [supplier,setSupplier] = useState<Supplier>({});
    const history = useHistory();
    useEffect(() => {
        search();
    }, []);
    
     const search = ()=> {
         if(id !== 'new'){
             let result = searchSupplierById(id);
             setSupplier(result);
         }
    }

    const save = () =>{
        saveSupplier(supplier);
        history.push('/page/suppliers')
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
                </IonHeader>



                <IonContent>
                    <IonCard>
                    <IonTitle>{id==='new'? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>
                    
                    
                    
                    <IonRow>
                    <IonCol>

                    <IonItem>
                        <IonLabel position="stacked">Nombre</IonLabel>
                        <IonInput onIonChange={e =>supplier.name= String(e.detail.value)} value={supplier.name}> </IonInput>
                    </IonItem>
                    </IonCol>
                    </IonRow>
                    <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput onIonChange={e => supplier.email =String( e.detail.value)} value={supplier.email}> </IonInput>
                        </IonItem>
                    </IonCol>
                    
                    <IonCol>

                        <IonItem>
                        <IonLabel position="stacked">Direccion</IonLabel>
                        <IonInput onIonChange={e => supplier.address=String( e.detail.value)} value={supplier.address}> </IonInput>
                        </IonItem>
                    
                    </IonCol>
                    <IonCol>

                        <IonItem>
                            <IonLabel position="stacked">Telefono</IonLabel>
                            <IonInput onIonChange={e => supplier.phone=String( e.detail.value)  } value={supplier.phone}> </IonInput>
                        </IonItem>

                    </IonCol>

                    </IonRow>
                    
                    <IonItem>
                        <IonButton onClick={save} color='success' fill='solid' slot='end' size='default'>
                            <IonIcon icon={checkmark}/>
                            Guardar
                        </IonButton>
                    </IonItem>

                    
                    </IonCard>
                </IonContent>





            </IonContent>
        </IonPage>
    );
};

export default SupplierEdit;
