const express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
const { pool, Pool } = require('pg');
let data = require("./data");
const db = require('./db');
const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Gamer, you made it");
});

app.post("/place", (request, response) => {
  // change
});

app.get("/places", (request, response) => {
    db.getPlaces()
        .then(x => response.json(x))
});

app.get("/search/:searchTerm/:location", (request, response) => {
    db.getSearchPlace(request.params.searchTerm).then(x => response.json(x))
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
