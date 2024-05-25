import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user : 'postgres',
  host : 'localhost',
  database : 'permalist',
  password : "123456",
  port : 1818
})

db.connect();

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function getItems()
{
  let result = await db.query("SELECT * FROM items ORDER BY id ASC");
  items = result.rows;
}

// getItems();

app.get("/", async (req, res) => {
  await getItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  // items.push({ title: item });
  await db.query("insert into items (title) values ($1)",[item]);
  res.redirect("/");
});

app.post("/edit",async (req, res) => {
  let updateId = req.body.updatedItemId;
  let editedData = req.body.updatedItemTitle;
  // console.log(updateId);
  // console.log(editedData);
  await db.query("UPDATE items SET title = ($1) WHERE id = ($2)",[editedData,updateId]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const deleteId = req.body.deleteItemId;
  await db.query("DELETE FROM items WHERE id = ($1)",[deleteId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
