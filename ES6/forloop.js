let cars=[{brand:'maruthi',model:'swift',price:800000,color:'black'},
{brand:'maruthi',model:'swift',price:800000,color:'black'},
{brand:'toyato',model:'fortuner',price:900000,color:'red'},
{brand:'jagwar',model:'i20',price:8500000,color:'blue'},
{brand:'fite',model:'verna',price:550000,color:'pink'},
{brand:'audi',model:'2022',price:8000000,color:'purpol'},
{brand:'bmw',model:'new',price:80055000,color:'black'},
]
let new_cars=[];
for(let i=0;i<=cars.length-1;i++){
    if(cars[i].brand=="maruthi"){
        new_cars.push(cars[i])
}
}
console.log(new_cars)