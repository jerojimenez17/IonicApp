import Supplier from "./Supplier";

export async function searchSuppliers(){
    let url = process.env.REACT_APP_API + 'suppliers';
    console.log(url);
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    return await response.json();
}
export async function removeSupplier(id:string){
    let url = process.env.REACT_APP_API + 'suppliers/'+id;
    await fetch(url,{
        "method":'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}

export const saveSupplier = async (supplier:Supplier)=>{
    let url = process.env.REACT_APP_API + 'suppliers';
    await fetch(url,{
        "method":'POST',
        "body": JSON.stringify(supplier),
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}

export async function searchSupplierById(id:string){
    let url = process.env.REACT_APP_API + 'suppliers/'+id;
    let response = await fetch(url,{
        "method":'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    return await response.json();
}