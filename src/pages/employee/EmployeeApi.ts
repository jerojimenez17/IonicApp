import Employee from "./Employee";

export const searchEmployees = ()=>{
    if(!localStorage['employees']){
        localStorage['employees']= '[]';
    }
    
    let employees = localStorage['employees'];
    employees = JSON.parse(employees);
    return employees;

    
}
export const removeEmployee = (id:string)=>{
    let employees = searchEmployees();
    let indice = employees.findIndex((employee:any) => employee.id == id);
    employees.splice(indice,1);
    localStorage['employees'] = JSON.stringify(employees);
}

export const saveEmployee = (employee:Employee)=>{
    let employees = searchEmployees();
    if(employee.id){
        let indice = employees.findIndex((c:Employee) => c.id == employee.id);
        employees[indice]=employee;

    }
    else{
        employee.id= String(Math.round(Math.random()*10000));
        employees.push(employee);
    }
    localStorage['employees'] = JSON.stringify(employees);
}

export const searchEmployeeById = (id:string)=>{
    let employees = searchEmployees();
    return employees.find((employee :any) => employee.id ==id);
}