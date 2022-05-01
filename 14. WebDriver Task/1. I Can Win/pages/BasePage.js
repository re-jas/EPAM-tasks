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

  async type(locator, inputText) {
    await this.find(locator).sendKeys(inputText);
  }
}

module.exports = BasePage;