let employee=[{id:101,name:"venkey",salary:4000},
{id:102,name:"thrisha",salary:4500}]
function createemployee(emp){
    employee.push(emp)
}
createemployee({id:103,name:"shakthi",salary:30000})
console.log(employee)
createemployee({id:104,name:"hanumanthu",salary:35000})
console.log(employee)
createemployee({id:105,name:"meenakshi",salary:45000})
console.log(employee)