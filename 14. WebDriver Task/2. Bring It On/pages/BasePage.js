const { Key } = require("selenium-webdriver");
const Until = require("selenium-webdriver").until;

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async visit(url) {
    await this.driver.get(url);
  }

  async explicitWait(locator, timeout) {
    await this.driver.wait(Until.elementLocated(locator), timeout);
  }

  find(locator) {
    return this.driver.findElement(locator);
  }

  async click(locator) {
    await this.find(locator).click();
  }

  async type(locator, inputText, ret) {
    if (ret) {
      await this.find(locator).sendKeys(inputText, Key.RETURN);
    } else {
      await this.find(locator).sendKeys(inputText);
    }
  }

  async getText(locator) {
    let text = await this.find(locator)
      .getText()
      .then(function (value) {
        return value;
      });

    return text;
  }

  async getTitle() {
    let title = await this.driver.getTitle().then(function (value) {
      return value;
    });

    return title;
  }
}

module.exports = BasePage;
