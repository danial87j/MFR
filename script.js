let numbers = [1,2,5];
isEven = (x) => x%2 === 0; 
const evenNumbers = numbers.filter(isEven);
const square = (x) => x*x;
const squaredNumber = evenNumbers.map(square);
const result = numbers.reduce((acc,curr) =>{
    return acc + curr;
},0);
console.log(result + Number(squaredNumber));