import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const app = express();
const port = 3000;

let db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "world",
  password : "123456",
  port : 1818
})

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited()
{
  let result = await db.query("SELECT country_code from visited_countries");
  let countries = [];

  result.rows.forEach((country)=>
  {
    countries.push(country.country_code);
  })


  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
 let countries = await checkVisited();


  res.render("index.ejs",{
    total : countries.length,
    countries : countries
  })
});

app.post("/add",async (req,res)=>
{
  try {
    let userCountry = req.body.country;
    let addCountry = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'",[userCountry.toLowerCase()]);
    console.log(addCountry.rows[0].country_code);

    try {
      let addVisited = await db.query("INSERT INTO visited_countries(country_code) VALUES ($1)",[addCountry.rows[0].country_code]);

      res.redirect("/");
    } catch (err)
    {
      const countries = await checkVisited();
      res.render("index.ejs", {
        countries : countries,
        total : countries.length,
        error : "country has been already added"
      })
    }
  } catch (err)
  {
    let countries = await checkVisited();
    res.render("index.ejs", {
      countries : countries,
      total : countries.length,
      error : "Country name does not exist,Please enter a valid country"
    })
  }
  
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
