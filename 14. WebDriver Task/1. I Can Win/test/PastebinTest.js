const { Builder, Capabilities } = require("selenium-webdriver");
const PastebinPage = require("../pages/PastebinPage");
const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

describe("I Can Win", function () {
  this.timeout(50000);
  let driver, pasteCreate;

  beforeEach(async function () {
    driver = await new Builder()
      .withCapabilities(caps)
      .forBrowser("firefox")
      .build();
    pasteCreate = new PastebinPage(driver);
    await pasteCreate.load();
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("Creation of a New Paste", async function () {
    // this locator is not constant and may differ in each test because it is not located in the PastebinPage.js
    let t = "//ul[@id='select2-postform-expiration-results']/li[3]"; // Paste Expiration: "10 Minutes"
    
    await pasteCreate.newPaste("Hello from WebDriver", t, "helloweb");
  });
});
