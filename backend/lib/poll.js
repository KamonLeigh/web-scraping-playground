const {combineData } = require("./scraper");

setInterval(() => {
    console.log("start")
    combineData();
    console.log("running")
}, 3600000)