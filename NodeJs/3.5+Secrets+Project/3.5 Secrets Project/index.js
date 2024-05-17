//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
var authorised = false;

function passwordChecker(req,res,next)
{
    if(req.body.password === "ILoveProgramming")  // also do like req.body["password"]
    {
        authorised = true;
    }
    next();
}
app.use(bodyParser.urlencoded({extended:true}));
app.use(passwordChecker);

app.get("/",(req,res)=>
{
    console.log("got it");
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/check",(req,res)=>
{
    if(authorised)
    {
        res.sendFile(__dirname+"/public/secret.html");
    }
    else
    {
        res.sendFile(__dirname+"/public/index.html");
    }
})

app.listen(3000,()=>
{
    console.log("Listening at port : 3000");
})