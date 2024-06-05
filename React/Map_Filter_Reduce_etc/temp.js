//MAP

let number = [3,56,2,48,5];

let squares = number.map((num)=> {
    return num*num;
})

console.log(squares);

// ===============================================================

// FILTER

let evens = number.filter((num)=> {
    return num % 2 === 0;
})

console.log(evens);  

// ================================================================

// REDUCE

const initialVal = 5;
const sum = number.reduce((accumelator,current)=> {
    return accumelator+current;
},initialVal);

console.log(sum);

// ================================================================

// FIND

let greater25 = number.find((num)=> {
    return num > 25;        // Will return only first number > 25
})

console.log(greater25);


// ================================================================

let greater25Index = number.findIndex((num)=> {
    return num > 25;
})

console.log(greater25Index);