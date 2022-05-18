import { IonApp, IonButton, IonItemDivider, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter, IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import CustomerList from './pages/customer/CustomerList';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CustomerEdit from './pages/customer/CustomerEdit';
import EmployeeList from './pages/employee/EmployeeList';
import EmployeeEdit from './pages/employee/EmployeeEdit';
import SupplierList from './pages/suppliers/SupplierList';
import SupplierEdit from './pages/suppliers/SupplierEdit';
import ProductsJMList from './pages/products/ProductsJMList';
import ProductsTaladroList from './pages/products/ProductsTaladroList';
import  ChangeList  from './pages/changeList/ChangeList';
import productsTrebol from './pages/products/ProductsTrebol';
import ProductsTrebol from './pages/products/ProductsTrebol';
import CartProvider from './context/CartProvider';
import Cart from './components/cart/Cart';
import ProductsCerrajeria from './pages/products/ProductsCerrajeria';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactHashRouter>
          <CartProvider>
        <IonSplitPane contentId="main">
          <Menu />

          <IonRouterOutlet id="main">
            
            <Route path="/" exact={true}> 
              <Redirect to="/page/productsTaladro" />
            </Route>
            <Route path="/page/customers" exact={true}>
              <CustomerList/>
            </Route>
            <Route path="/page/customer/:id" exact={true}>
              <CustomerEdit/>
            </Route>
            <Route path="/page/employees" exact={true}>
              <EmployeeList/>
            </Route>
            <Route path="/page/employee/:id" exact={true}>
              <EmployeeEdit/>
            </Route>
            <Route path="/page/suppliers" exact={true}>
              <SupplierList/>
            </Route>
            <Route path="/page/supplier/:id" exact={true}>
              <SupplierEdit/>
            </Route>
            <Route path="/page/cart" component={Cart}/>
            <Route path="/page/productsJM" exact={true}>
              <ProductsJMList/>
            </Route>
            <Route path="/page/productsTaladro" exact={true}>
              <ProductsTaladroList/>
            </Route>
            <Route path="/page/productsTrebol" exact={true}>
              <ProductsTrebol/>
            </Route>
            <Route path="/page/productsCerrajeria" exact={true}>
              <ProductsCerrajeria/>
            </Route>
            <Route path="/page/changeList" exact={true}>
              <ChangeList/>
           </Route>

          
          </IonRouterOutlet>
          
        </IonSplitPane>
          </CartProvider>
        
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
