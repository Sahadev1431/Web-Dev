import React from "react";
let name = prompt("Enter your name :");

export default function App4() {
    return (
        <div>
            <p>Created by {name}</p>
            <p>Copyright {new Date().getFullYear()}</p>
        </div>
    )
}