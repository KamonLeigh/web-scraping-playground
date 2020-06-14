const express = require("express");
const chalk = require("chalk");
const cors = require("cors");

const app = express();
app.use(cors());


app.listen(3000, () => console.log(chalk.green("backend end server has started")));




