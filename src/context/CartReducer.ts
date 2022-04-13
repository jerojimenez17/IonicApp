// import CartState from "../interfaces/CartState";
import CartState from "../interfaces/CartState";
import Product from "../interfaces/Product";
import ProductCart from "../interfaces/ProductCart";

type CartAction = 
   | {type:'addItem', payload: Product }
   | {type:'removeItem', payload: number}
    | {type:'removeAll', payload: Product}
    | {type:'updateAmount', payload: {id:string}}
    | {type:'updateTotal', payload: Product};




export const CartReducer = (state: CartState, action: CartAction): CartState => {
    console.log(action)
    switch(action.type){
         case 'addItem':

    console.log(state)
             return {
                 ...state,
                 products: [...state.products, action.payload],
                 amount: state.amount + 1,
                 total: state.total + parseFloat(action.payload.price)
             }
        case 'removeItem':
            return {
                ...state,
                products:[...state.products.slice(0,action.payload), ...state.products.slice(action.payload+1)],
                amount: state.amount - 1,
                total: state.total - parseFloat(state.products[action.payload].price)
            }
        case 'removeAll':
            return {
                ...state,
                products:[],  
                amount: 0,
                total: 0  
            }
        // case 'updateAmount':
        //     return {
        //         ...state,
        //         products: {...PROstate.products.map(product => {
        //             if(product.id === Number( action.payload.id)){
        //                 state.amount = state.amount + 1;
        //                 state.total = state.total + parseFloat(product.price);
        //                 return 
        //             }      
        //             re}turn product;
        //         }),    
        //     }

        default:
            return state;

    }
}