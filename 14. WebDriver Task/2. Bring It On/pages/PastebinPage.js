const BasePage = require("./BasePage");

// Locators for paste create
const CODE = { id: "postform-text" };
const SYNTAX_HIGHLIGHTING = { id: "select2-postform-format-container" };
const SYNTAX_HIGHLIGHTING_INPUT = { css: "input.select2-search__field" };
const PASTE_EXPIRATION = { id: "select2-postform-expiration-container" };
const PASTE_EXPIRATION_CHOICE = "//ul[@id='select2-postform-expiration-results']/li[contains(text(),'ID')]"
const PASTE_NAME = { id: "postform-name" };
const SUBMIT_BUTTON = { css: "button.btn.-big" };
// Locators for test
const SYNTAX_BOX = { css: "a.btn.-small.h_800" };
const CODE_BOX = { css: ".textarea" };

class PastebinPage extends BasePage {
  constructor(driver) {
    super(driver);
  }

  async load() {
    await this.visit("https://pastebin.com");
  }

  async newPaste(code, syntax, time, pasteName) {
    await this.type(CODE, code);
    await this.explicitWait(SYNTAX_HIGHLIGHTING, 10000);
    await this.click(SYNTAX_HIGHLIGHTING);
    await this.type(SYNTAX_HIGHLIGHTING_INPUT, syntax, true);
    await this.click(PASTE_EXPIRATION);
    await this.click({ xpath: PASTE_EXPIRATION_CHOICE.replace('ID', time) });
    await this.type(PASTE_NAME, pasteName);
    await this.click(SUBMIT_BUTTON);
  }

  async syntaxBoxResult() {
    await this.explicitWait(SYNTAX_BOX, 10000);
    return await this.getText(SYNTAX_BOX);
  }

  async titleCheck() {
    await this.explicitWait(SYNTAX_BOX, 10000);
    return await this.getTitle();;
  }

  async codeBoxResult() {
    await this.explicitWait(CODE_BOX, 10000);
    return await this.getText(CODE_BOX);
  }
}

module.exports = PastebinPage;
