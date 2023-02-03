const names = [
  "Abul",
  "Babul",
  "Cabul",
  "Dabul",
  "Eabul",
  "Fabul",
  "Abul",
  "Babul",
  "Cabul",
  "Dabul",
];

function removeDuplicate(name) {
  let uniques = [];
  for (let i = 0; i < name.length; i++) {
    const element = name[i];
    if (uniques.includes(element) === false) {
      uniques.push(element);
    }
  }
  return uniques;
}
const unique = removeDuplicate(names);
// console.log(unique);

const names1 = [
  "Abul",
  "Babul",
  "Cabul",
  "Dabul",
  "Eabul",
  "Fabul",
  "Abul",
  "Babul",
  "Cabul",
  "Dabul",
];

function remove(name1) {
  let unique1 = [];
  for (let i = 0; i < names1.length; i++) {
    const name2 = name1[i];
    if (unique1.includes(name2) === false) {
      unique1.push(name2);
    }
    // console.log(name2);
  }
  return unique1;
}
const unique1 = remove(names1);
console.log(unique1);
