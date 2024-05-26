import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database : "secrets",
  password : "123456",
  port:1818
})

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  // console.log(email);
  // console.log(password);

  try {
    let checkUser = await db.query("SELECT * FROM users WHERE email = ($1)",[email]);
    // console.log(checkUser);
    if (checkUser.rows.length > 0) {
      res.send("user already exist,try loggin in")
    }
    else {
      await db.query("INSERT INTO users(email,password) VALUES ($1,$2)",[email,password]);
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  
  const email = req.body.username;
  const password = req.body.password;
  
  // console.log(result.rows);
  try {
    const result = await db.query("SELECT * FROM users WHERE email = ($1)",[email]);
    if (result.rows.length > 0) {
      if (result.rows.find((user)=> user.password === password)) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect password");
      }
    } else {
      res.send("User does not exist,please register first");
    }
  } catch (err) {
    console.log(err);
  }

  // if (result.rows.find((user)=> user.email == email && user.password == password)) {
  //   res.render("secrets.ejs");
  // } else {
  //   res.json({error : "please enter proper email password"});
  // }

 
  // console.log(email);
  // console.log(password);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
