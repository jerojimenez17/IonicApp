import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonTitle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp,peopleOutline, peopleSharp, cart } from 'ionicons/icons';
import './Menu.css';
import LogoImg from '../images/logo_size (1).jpg';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  // {
  //   title: 'Clientes',
  //   url: '/page/customers',
  //   iosIcon: peopleOutline,
  //   mdIcon: peopleSharp
  // },
  // {
  //   title: 'Empleados',
  //   url: '/page/employees',
  //   iosIcon: paperPlaneOutline,
  //   mdIcon: paperPlaneSharp
  // },
  // {
  //   title: 'Proveedores',
  //   url: '/page/suppliers',
  //   iosIcon: peopleOutline,
  //   mdIcon: peopleSharp
  // },
  {
    title: 'Productos JM',
    url: '/page/productsJM',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },  
  {
    title: 'Productos Trebol',
    url: '/page/productsTrebol',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Productos Taladro',
    url: '/page/productsTaladro',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Productos Cerrajeria',
    url: '/page/productsCerrajeria',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main"  type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader color='blue'>
            <IonImg src={LogoImg}/>
          </IonListHeader>
        
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItem>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
