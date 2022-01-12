import Customer from "./Customer";

export async function searchCostumers(){
    let url = process.env.REACT_APP_API + 'custmoers'
    let response = await fetch(url,{
        "method":"GET",
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    return response.json();
}
export async function removeCostumer(id:string){
    let url = process.env.REACT_APP_API + 'custmoers/'+id;
    await fetch(url,{
        "method":"DELETE",
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}

export const saveCostumer = async (customer:Customer)=>{
    let url = process.env.REACT_APP_API + 'custmoers/'+customer.id
    await fetch(url,{
        "body": JSON.stringify(customer),
        "method":"POST",
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}

export async function searchCustomerById(id:string){
    let url = process.env.REACT_APP_API + 'custmoers/'+id;
    let response = await fetch(url,{
        "method":"GET",
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    return response.json();
}