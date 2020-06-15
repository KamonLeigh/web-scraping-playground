const express = require("express");
const chalk = require("chalk");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) =>{

    res.json({"hellow": "world"});
});





app.listen(3000, () => console.log(chalk.green("backend end server has started")));




