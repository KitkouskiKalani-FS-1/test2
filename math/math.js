const add =(num1,num2)=> num1+num2;
const subtract =(num1,num2)=> num1-num2;
const multiply =(num1,num2)=> num1*num2;
const divide =(num1,num2)=> num1/num2;
const squareRoot =(num)=>Math.sqrt(num);
const max =(...nums)=>Math.max(...nums);

module.exports = {add,subtract,multiply,divide,squareRoot,max}