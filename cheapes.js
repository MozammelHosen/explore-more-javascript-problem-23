const phones = [
  {
    name: "samsung",
    camera: "10px",
    storage: "32GB",
    price: 72000,
    color: "black",
  },
  {
    name: "Walton",
    camera: "12px",
    storage: "32GB",
    price: 12000,
    color: "black",
  },
  {
    name: "Xaiomi",
    camera: "10px",
    storage: "32GB",
    price: 2000,
    color: "black",
  },
  {
    name: "HTC",
    camera: "10px",
    storage: "32GB",
    price: 43000,
    color: "black",
  },
];

function cheapestPhones(phone) {
  let chepets = phone[0];
  for (let i = 0; i < phone.length; i++) {
    const element = phone[i];
    if (element.price < chepets.price) {
      chepets = element;
    }
    // console.log(element);
  }
  return chepets;
}
const result = cheapestPhones(phones);
// console.log("total", result);

function cheapestPhones2(phone1) {
    let chepet1 = phone1[0];
  for (let i = 0; i < phone1.length; i++) {
    const element = phone1[i];
    if(element.price < chepet1.price){
        chepet1 = element;
    }
    // console.log(element);
  }
  return chepet1;
}
const phone3 = cheapestPhones2(phones)
console.log(phone3);
