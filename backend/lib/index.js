

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


 

async function getInstagramFollowing() {
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/byronleigh/?hl=en");
    await page.waitFor(60000);

    const followers = await page.evaluate(() => {
           const arr = Array.from(document.querySelectorAll("[href^='/accounts/login'] span"));

          const slicedArr = arr.slice(0, 3);

          return slicedArr.map(item => item.textContent);
    });

     await browser.close();

        return followers
    
}

//getInstagramFollowing().then(res => console.log(res));

async function combineData() {
    const result = await Promise.all([
      getTwitterFollowing(),
      getInstagramFollowing(),
    ]);

    return result;
}

combineData()
            .then(result => console.log(result))
            .catch(err => console.log(err))