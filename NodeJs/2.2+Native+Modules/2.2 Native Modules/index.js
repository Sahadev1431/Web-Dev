const fs = require("fs");

// fs.writeFile("nesMessage.txt","hello from India",(err)=>
// {
//     console.log("file has been created");
// });


fs.readFile("./nesMessage.txt","utf-8",(err,data)=>
{
    console.log(data);
})