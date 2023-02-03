//  variable
const desh = "bangladesh";
//  number Type
const number = 437;
//  Boolean Type
const isBangladesh = true;
// Function Type
function add(num1, num2) {
  const num3 = num1 + num2;
  return num3;
}
add(23, 26);
console.log(add);
// Objects Type
const names = {
  name: "Bangladesh",
  age: 20,
  Language: "Bangla",
};
//  Array Type
const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

console.log(typeof desh);
console.log(typeof number);
console.log(typeof isBangladesh);
console.log(typeof add);
console.log(typeof names);
// Array Not Typeof The
console.log(Array.isArray(numbers));

//  Array includes
console.log(numbers.includes(20));
//  index Of
if (numbers.indexOf(21) !== -1) {
  console.log("Valid index");
} else {
  console.log("Not Valid Index");
}

//  New Array Add
const numberss = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56];
console.log(numberss.concat(numbers));
