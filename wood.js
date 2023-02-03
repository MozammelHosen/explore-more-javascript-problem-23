function woods(chairQuantity,tableQunatity, bedQunatity){
    const percChairWood = 3 ;
    const percTableWood = 10 ;
    const percBedWood = 30 ;
    const chairWood = percChairWood * chairQuantity;
    const tableWood = percTableWood * tableQunatity;
    const bedWood = percBedWood * bedQunatity;
    const result = chairWood + tableWood + bedWood
    return result;
}
const results = woods(2,5,7);
// console.log(results);



function phones(num1,num2,num3,num4,num5){
    const phone1 = 43000;
    const phone2 = 33000;
    const phone3 = 13000;
    const phone4 = 23000;
    const phone5 = 53000;

    const phone6 = phone1 * num1;
    const phone7 = phone2 * num2;
    const phone8 = phone3 * num3;
    const phone9 = phone4 * num4;
    const phone10 = phone5 * num5;
    const result = phone6 + phone7 + phone8 + phone9 + phone10;
    return result;
}
const result = phones(2,3,4,5,60);
console.log(result);