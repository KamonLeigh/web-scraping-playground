const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const log = console.log
require("./lib/poll")

const followRouter = require("./routers/follow");


const app = express();
app.use(cors());
app.use(followRouter);


app.listen(3000, () => log(chalk.green("backend end server has started")));




