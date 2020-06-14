

const puppeteer = require("puppeteer");

async function getTwitterFollowing() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://twitter.com/kamon80?lang=en");
    await page.waitFor(50000);
    const getFollwings = await page.evaluate(() => {
      const span = document.querySelector("[href='/kamon80/following'] span");

      return span.children[0].textContent;
    });

    const getFollower = await page.evaluate(() => {
      const span = document.querySelector("[href='/kamon80/followers'] span");

      return span.children[0].textContent;
    });


    await browser.close();
    return { getFollower, getFollwings }
}



 //getTwitterFollowing().then( result => console.log(result));


 

