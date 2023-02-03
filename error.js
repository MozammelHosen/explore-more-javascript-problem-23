function add(num1,num2){
    if(typeof num1 !=="number" || typeof num2 !== "number"){
        console.log("Please inter Correct Number");
    } else{
        return num1+num2;
    }
}
const output = add(12,13);
console.log(output);


function multiply(num1,num2){
    const result  = num1*num2;
    return result;
}
const output2 = multiply(12*13);
console.log(output2);