const shoppings = [
  { name: "shrit", price: 2200, quantity: 5 },
  { name: "pan", price: 3200, quantity: 3 },
  { name: "bet", price: 200, quantity: 5 },
  { name: "shoes", price: 5200, quantity: 3 },
];

function shoppinCard(name) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    const element = name[i];
    sum += element.price * element.quantity;
    // console.log(element);
  }
  return sum;
}
const total = shoppinCard(shoppings);
console.log(total);

const products = [
  { name: "shrit", price: 2200, quantity: 5 },
  { name: "pan", price: 3200, quantity: 3 },
  { name: "bet", price: 200, quantity: 5 },
  { name: "shoes", price: 5200, quantity: 3 },
];

function productsprice(product){
    let sum = 0;
    for(let i = 0; i < product.length; i++){
        const element = product[i];
        sum +=  element.price * element.quantity;
        // console.log(element);
    }
    return sum;
}
const product = productsprice(products);
console.log(product);