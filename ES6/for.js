let cars=[{brand:'maruthi',model:'swift',price:800000,color:'black'},
{brand:'maruthi',model:'swift',price:800000,color:'black'},
{brand:'toyato',model:'fortuner',price:900000,color:'red'},
{brand:'jagwar',model:'i20',price:8500000,color:'blue'},
{brand:'fite',model:'verna',price:550000,color:'pink'},
{brand:'audi',model:'2022',price:8000000,color:'purpol'},
{brand:'bmw',model:'new',price:80055000,color:'black'},
]
let new_cars=[];
for (car of cars){
    if(car.color=="black"){
        new_cars.push(car)

    }
}
console.log(new_cars)