import express from 'express';
import ejs from 'ejs';

const app = express();
app.set("view engine","ejs");

var todayDate = new Date();
var days = todayDate.getDay();

app.get("/",(req,res)=>
{
    if(days === 0 || days === 6)
    {
        res.render("index",{day : "weekend",whatToDo : "have fun"});
    }
    else
    {
        res.render("index",{day : "weekday",whatToDo : "work hard"});
    }
})

app.listen(3000,()=>
{
    console.log("Server has startes at route 3000");
})

