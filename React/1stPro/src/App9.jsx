import React from "react";
import * as funcs from './importExport.js';
export default function App9() {
    return (
        <ul>
            <li>{funcs.add(1,2)}</li>
            <li>{funcs.substract(2,3)}</li>
            <li>{funcs.multiply(7,2)}</li>
            <li>{funcs.divide(5,2)}</li>
        </ul>
    )
}