import React from "react";
let fName = prompt("Enter your first Name:")
let lName = prompt("Enter your last Name:")
let luckyNum = prompt("Enter your lucky number : ");
export default function App3() {
    return (
        <div>
            <h1>Hello {fName} {lName}</h1>
            <p>Your lucky number is {luckyNum}</p>
        </div>
    )
}