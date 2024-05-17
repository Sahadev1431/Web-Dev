import bodyParser from "body-parser";
import express from "express";
import path from 'path';
import { fileURLToPath } from "url";

const __filename  = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>
{
  res.sendFile(`${__dirname}/public/index.html`);
})

app.post("/submit",(req,res)=>
{
  res.send(`<h1>Your band name is </h1><h2>${req.body.street+req.body.pet}</h2>`)   //also like sol 4
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
