const { Builder, Capabilities } = require("selenium-webdriver");
const PastebinPage = require("../pages/PastebinPage");
const assert = require("chai").assert;

const caps = new Capabilities();
caps.setPageLoadStrategy("eager");

describe("Bring It On", function () {
  this.timeout(30000);

  let code = [
    'git config --global user.name "New Sheriff in Town"\n',
    'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n',
    "git push origin master --force",
  ];
  let pasteExp = "//ul[@id='select2-postform-expiration-results']/li[3]"; // Paste Expiration: "10 Minutes"
  let syntax = "Bash";
  let title = "how to gain dominance among developers";

  let driver = new Builder()
    .withCapabilities(caps)
    .forBrowser("firefox")
    .build();
  let pasteCreate = new PastebinPage(driver);
  pasteCreate.load();

  it("Creation of a New Paste", async function () {
    await pasteCreate.newPaste(code, syntax, pasteExp, title);
  });

  it("Syntax is suspended for bash", async function () {
    const boxCheck = await pasteCreate.syntaxBoxResult();
    assert.strictEqual(boxCheck, "Bash");
  });

  it("Browser page title matches Paste Name / Title", async function () {
    let curTitle = await pasteCreate.titleCheck();
    curTitle = curTitle.replace(" - Pastebin.com", "");
    assert.strictEqual(curTitle, title);
  });

  it("Check that the code matches the one entered in paragraph 2", async function () {
    let codeInOneLine = code.join("");
    const codeCheck = await pasteCreate.codeBoxResult();
    assert.strictEqual(codeCheck, codeInOneLine);
    await driver.quit();
  });

});
