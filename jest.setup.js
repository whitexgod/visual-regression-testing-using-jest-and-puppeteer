jest.setTimeout(30000); // Adjust timeout as needed

const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

beforeAll(async () => {
  console.log("statrt NAKIT");
  global.browser = await puppeteer.launch({ headless: "new" });
});

afterAll(async () => {
  await global.browser.close();
});
