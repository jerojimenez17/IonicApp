import Supplier from "./Supplier";

export const searchSuppliers = ()=>{
    if(!localStorage['suppliers']){
        localStorage['suppliers']= '[]';
    }
    
    let suppliers = localStorage['suppliers'];
    suppliers = JSON.parse(suppliers);
    return suppliers;

    
}
export const removeSupplier = (id:string)=>{
    let suppliers = searchSuppliers();
    let indice = suppliers.findIndex((supplier:any) => supplier.id == id);
    suppliers.splice(indice,1);
    localStorage['suppliers'] = JSON.stringify(suppliers);
}

export const saveSupplier = (supplier:Supplier)=>{
    let suppliers = searchSuppliers();
    if(supplier.id){
        let indice = suppliers.findIndex((c:Supplier) => c.id == supplier.id);
        suppliers[indice]=supplier;

    }
    else{
        supplier.id= String(Math.round(Math.random()*1000));
        suppliers.push(supplier);
    }
    localStorage['suppliers'] = JSON.stringify(suppliers);
}

export const searchSupplierById = (id:string)=>{
    let suppliers = searchSuppliers();
    return suppliers.find((supplier :any) => supplier.id ==id);
}