import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// TODO: Replace the values below with your own before running this file.
const yourUsername = "sahadev";
const yourPassword = "1234";
const yourAPIKey = "";
const yourBearerToken = "4063bea7-82b3-4ca0-9899-b66dc2139d95";

// Set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/random`);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/filter`, {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(404).send(error.message);
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/secrets/2`, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
