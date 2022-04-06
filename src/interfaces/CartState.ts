
import Product from "./Product";
import ProductCart from "./ProductCart";

export default interface CartState {
    products: Product[];
    amount: number;
    total: number;

}
