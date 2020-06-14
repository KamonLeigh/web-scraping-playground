const express = require("express");
const chalk = require("chalk");

const app = express();



app.listen(3000, () => console.log(chalk.green("backend end server has started")));




