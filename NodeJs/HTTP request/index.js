import express from 'express';
const app = express();
let port = 3000;

app.get("/",(req,res)=>
{
    res.send("<h1>hello form heading from sahdev nai</h1>");
});

app.get("/about",(req,res)=>
{
    res.send("author : Sahadev Nai mumma no ladakvayo");
})

app.get("/contact",(req,res)=>
{
    res.send("<h1>7623909167</h1>");
})

app.listen(port,()=>
{
    console.log("server has started successfully");
})