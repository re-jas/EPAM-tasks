const { Builder, Capabilities } = require("selenium-webdriver");
const PastebinPage = require("../pages/PastebinPage");
const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

describe("I Can Win", function () {
  let driver, pasteCreate;

  before(async function () {
    driver = await new Builder()
      .withCapabilities(caps)
      .forBrowser("firefox")
      .build();
    pasteCreate = new PastebinPage(driver);
    await pasteCreate.load();
  });

  after(async function () {
    await driver.quit();
  });


  it("Creation of a New Paste", async function () {
    await pasteCreate.newPaste("Hello from WebDriver", "10 Minutes", "helloweb");
  });
});
