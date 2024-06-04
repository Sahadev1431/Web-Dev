import React from 'react';

let d = new Date();
let currentTIme = d.getHours();
let greeting,color;
if (currentTIme < 12 ) {
    greeting = "Morning";
    color = "red";
} else if (currentTIme > 12 && currentTIme < 18) {
    greeting = "Afternoon";
    color = "green";
} else {
    greeting = "Evening";
    color = "blue"
}

let inStyle = {
    color : color
}

export default function Heading8() {
    return(
        <h1 style={inStyle}>Good {greeting}</h1>
    )
}