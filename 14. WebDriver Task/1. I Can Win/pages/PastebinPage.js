const BasePage = require("./BasePage");

// Locators
const CODE = { id: "postform-text" };
const PASTE_NAME = { id: "postform-name" };
const SUBMIT_BUTTON = { css: "button.btn.-big" };
const PASTE_EXPIRATION = { id: "select2-postform-expiration-container" };
const PASTE_EXPIRATION_CHOICE = "//ul[@id='select2-postform-expiration-results']/li[contains(text(),'ID')]"


class PastebinPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async load() {
    await this.visit("https://pastebin.com/");
  }

  async newPaste(code, time, pasteName) {
    await this.explicitWait(PASTE_EXPIRATION, 10000);
    await this.type(CODE, code);
    await this.click(PASTE_EXPIRATION);
    // "ID" replaces by time and creates full xpath
    await this.click({ xpath: PASTE_EXPIRATION_CHOICE.replace('ID', time) });
    await this.type(PASTE_NAME, pasteName);
    await this.click(SUBMIT_BUTTON);
  }
}

module.exports = PastebinPage;
