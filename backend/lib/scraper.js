const puppeteer = require("puppeteer");
const db = require("../db");
const chalk = require("chalk");
const log = console.log;

async function getTwitterFollowing() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://twitter.com/kamon80?lang=en");
    await page.waitFor(50000);
    const following = await page.evaluate(() => {
      const span = document.querySelector("[href='/kamon80/following'] span");

      return parseInt(span.children[0].textContent.replace(",", ""));
    });

    const followers = await page.evaluate(() => {
      const span = document.querySelector("[href='/kamon80/followers'] span");

      return parseInt(span.children[0].textContent.replace(",", ""));
    });

    await browser.close();
    return { followers, following }
}

async function getInstagramFollowing() {
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/byronleigh/?hl=en");
    await page.waitFor(60000);

    const followers = await page.evaluate(() => {
           const keys = ['posts', 'followers', 'following' ];
           const arr = Array.from(document.querySelectorAll("[href^='/accounts/login'] span"));

           const slicedArr = arr.slice(0, 3);

          return slicedArr.map((item, i)=> ({ [keys[i]]: parseInt(item.textContent.replace(",","")) }))
                          .reduce((acc, item) => {
                            return {...acc, ...item}
                          }, {});
    });

     await browser.close();

        return followers
    
}

async function combineData() {


  try {
    const [twitterData, instagramData]= await Promise.all([
      getTwitterFollowing(),
      getInstagramFollowing(),
    ]);

    const twitter = { ...twitterData, date: Date.now()};
    const instagram = { ...instagramData, date: Date.now()}
    console.log([twitter, instagram]);
    db.get('twitter')
      .push(twitter)
      .write();

    db.get('instagram')
      .push(instagram)
      .write();
      log(chalk.inverse('DONE!'));
  } catch(e) {
     log(chalk.red(e));
  }
}



module.exports = { combineData };