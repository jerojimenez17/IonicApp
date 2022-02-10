import { IonBadge, IonButton, IonButtons, IonCardHeader, IonContent, IonHeader, IonInput, IonItemOptions, IonPage, IonTitle, IonToolbar, ReactComponentOrElement } from '@ionic/react';
import React from 'react';

const ChangeList:React.FC = () => {
  
  
    return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
              <IonTitle className='title' color='primary' size='large'>
                  Actualizar Listas
              </IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent >

          <IonButtons className='Botones' >

          <IonButton fill='outline' color='primary'>

          <input type= "file" accept='.xlsx'></input>
          </IonButton>
          <IonButton color='success' fill='solid'>Actualizar lista</IonButton>
          </IonButtons>
          </IonContent>
      </IonPage>
  );
};
export default ChangeList;
