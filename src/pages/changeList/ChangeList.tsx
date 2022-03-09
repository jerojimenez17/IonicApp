import { IonBadge, IonButton, IonButtons, IonCardHeader, IonContent, IonHeader, IonInput, IonItemOptions, IonPage, IonTitle, IonToolbar, ReactComponentOrElement } from '@ionic/react';
import React from 'react';

const ChangeList:React.FC = () => {
    // const readUploadFile = (e:any) => {
    //     e.preventDefault();
    //     if (e.target.files) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             const data = e.target.result;
    //             const workbook = xlsx.read(data, { type: "array" });
    //             const sheetName = workbook.SheetNames[0];
    //             const worksheet = workbook.Sheets[sheetName];
    //             const json = xlsx.utils.sheet_to_json(worksheet);
    //             console.log(json);
    //         };
    //         reader.readAsArrayBuffer(e.target.files[0]);
        
   
  
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

          <IonButton fill='outline' color='primary' >
            
          </IonButton>
          <IonButton color='success' fill='solid'>Actualizar lista</IonButton>
          </IonButtons>
          </IonContent>
      </IonPage>
  );
};
export default ChangeList;
