const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const db = require('./db');

const app = express();
app.use(cors());

app.get("/", (req, res) =>{

    res.json({"hellow": "world"});
});

app.get("/data", (req, res) => {
  const {twitter, instagram}  = db.value();
  res.json({ twitter, instagram})
});




app.listen(3000, () => console.log(chalk.green("backend end server has started")));




