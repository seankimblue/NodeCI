const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
  // for DEV
  // browser = await puppeteer.launch({
  //   headless: false,
  // });
  // for CI
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });
  page = await browser.newPage();
  // for DEV only
  // await page.goto('localhost:3000');
  // works for both DEV and CI
  await page.goto('http://localhost:3000');
});

afterEach(async () => {
  await browser.close();
});

test('We can launch a browser', async () => {
  const text = await page.$eval('a.brand-logo', (el) => el.innerHTML);

  expect(text).toEqual('Blogster');
});
