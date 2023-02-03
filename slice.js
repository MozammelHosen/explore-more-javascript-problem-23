const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const numberSlice = numbers.slice(2, 5);
console.log(numberSlice);

//  change the slice Value
const numbers2 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const numberSlice2 = numbers2.splice(2, 5, 35, 36, 37, 38);
console.log(numberSlice2);
console.log(numbers2);
