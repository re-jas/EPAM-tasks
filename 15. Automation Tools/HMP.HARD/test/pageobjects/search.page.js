const Page = require("./page");

class Search extends Page {
  get inputSearch() {
    return $(".devsite-search-field");
  }

  get calculator() {
    return $(
      "//div[@class='gs-title']//b[contains(text(),'Google Cloud Pricing Calculator')]"
    );
  }

  async load(ser) {
    await this.inputSearch.waitForDisplayed();
    await this.inputSearch.setValue(ser);
    await browser.keys("Enter");
    // choose from search result
    await this.calculator.waitForDisplayed();
    await this.calculator.click();
  }

  open() {
    return super.open();
  }
}

module.exports = new Search();
