import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil, text } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import Customer from './Customer';
import {removeCostumer, saveCostumer, searchCostumers, searchCustomerById } from './CustomerApi';


const CustomerEdit: React.FC = () => {
    
    const { name, id } = useParams<{ name: string; id:string }>();

    const [customer,setCustomer] = useState<any>({});
    const history = useHistory();
    useEffect(() => {
        search();
    }, []);
    
     const search = async ()=> {
         if(id !== 'new'){
             let result = await searchCustomerById(id);
             setCustomer(result);
         }
    }

    const save = () =>{
        saveCostumer(customer);
        history.push('/page/customers')
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
                        <IonInput onIonChange={e =>customer.firstname= String(e.detail.value)} value={customer.firstname}> </IonInput>
                    </IonItem>
                    </IonCol>

                    <IonCol>

                        <IonItem>
                            <IonLabel position="stacked">Apellido</IonLabel>
                            <IonInput onIonChange={e => customer.lastname=String(e.detail.value)} value={customer.lastname}> </IonInput>
                        </IonItem>
                    </IonCol>
                    </IonRow>
                    <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">Email</IonLabel>
                            <IonInput onIonChange={e => customer.email =String( e.detail.value)} value={customer.email}> </IonInput>
                        </IonItem>
                    </IonCol>
                    
                    <IonCol>

                        <IonItem>
                        <IonLabel position="stacked">Direccion</IonLabel>
                        <IonInput onIonChange={e => customer.address=String( e.detail.value)} value={customer.address}> </IonInput>
                        </IonItem>
                    
                    </IonCol>
                    <IonCol>

                        <IonItem>
                            <IonLabel position="stacked">Telefono</IonLabel>
                            <IonInput onIonChange={e => customer.phone=String( e.detail.value)  } value={customer.phone}> </IonInput>
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

export default CustomerEdit;
