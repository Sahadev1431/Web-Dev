// var userInput = prompt("Enter lines");

// // alert("you have written "+userInput+" characters and "+ 140-userInput+" left");
// // alert("you have written "+userInput.length +" characters and "+ (140-userInput.length)+" left");

// // alert(userInput.slice(0,140));


// alert("Hello "+userInput.slice(0,1).toUpperCase()+userInput.slice(1,userInput.length).toLocaleLowerCase());


// let ans = (45/6);
// console.log(ans);   

// let a = Math.random();
// console.log(a);




// function forRand(n)
// {
//     console.log( Math.floor(Math.random() * n) +1);
// }

// forRand(6);



// let Fname = prompt("Enter your name :");
// let love = prompt("Enter your love name :");

// randNo = Math.floor(Math.random() * 100) + 1;  // to remove 0 zero
// alert(love+"'s love towards "+Fname+" is "+randNo+" %");



// let gl = ["sgsj","hdn","nhje","uye","wed"];

// if(gl.includes("hdn"))
// {
//     alert("Welcome!");
// }



// let output = [];
// let i  = 1;
// function fizzbuzz()
// {
//     if(i % 3 === 0)
//     {
//         if ( i % 5 === 0)
//         {
//             output.push("FizzBuzz");
//         }
//         else
//         {
//             output.push("Fizz");
//         }
//     }
//     else if (i % 5 === 0)
//     {
//         output.push("Buzz");
//     }
//     else
//     {
//         output.push(i);
//     }

//     console.log(output);
//     i++;
// }





let n = 99;
function beer()
{
    if(n === 1)
    {
        console.log("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
    }
    else
    {
        console.log(n+" bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, "+(n-1)+" bottles of beer on the wall.");
    }
}

while(n!=0)
{
    beer();
    
    n--;
}

console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");