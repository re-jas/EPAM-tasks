const { Builder, Capabilities } = require("selenium-webdriver");
const PastebinPage = require("../pages/PastebinPage");
const assert = require("chai").assert;

const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

describe("Bring It On", function () {
  let driver, pasteCreate;
  let code =
    'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force';
  let pasteExp = "10 Minutes";
  let syntax = "Bash";
  let title = "how to gain dominance among developers";

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
    await pasteCreate.newPaste(code, syntax, pasteExp, title);
  });

  it("Syntax is suspended for bash", async function () {
    assert.strictEqual(await pasteCreate.syntaxBoxResult(), syntax);
  });

  it("Browser page title matches Paste Name / Title", async function () {
    assert.include(await pasteCreate.titleCheck(), title);
  });

  it("Check that the code matches the one entered in paragraph 2", async function () {
    assert.strictEqual(await pasteCreate.codeBoxResult(), code);
  });
});
