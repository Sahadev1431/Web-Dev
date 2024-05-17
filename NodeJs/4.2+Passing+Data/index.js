import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// var head1 = "<h1>Enter Your Name below</h1>";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const lengthOfName = (req.body["fName"].length+(req.body["lName"].length));
  // head1 = `<h1>There are ${lengthOfName} letters in your name</h1>`;
  res.render("index.ejs",{letterLength : lengthOfName});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
