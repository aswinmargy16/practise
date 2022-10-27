let state = {
    product_Id: 999,
    product_Name: "samsung 12a",
    price: 25000
}
console.log(state.product_Id)
console.log(state.product_Name)
console.log(state.price)
let { product_Id, product_Name } = state
console.log(product_Id)
console.log(product_Name)