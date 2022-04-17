const Page = require("./page");

class Estimate extends Page {
  get regionResult() {
    return $("//div[normalize-space()='Region: Iowa']");
  }

  get commitTermResult() {
    return $("//div[normalize-space()='Commitment term: 1 Year']");
  }

  get vmClassResult() {
    return $("//div[normalize-space()='VM class: regular']");
  }

  get instanceTypeResult() {
    return $(
      "//div[@ng-class=\"item.items.sustainedUse || item.items.isInstanceCommitted ? 'cpc-cart-multiline' : ''\"]"
    );
  }

  get localSsdResult() {
    return $(
      "//div[@ng-class=\"item.items.isSsdCommitted ? 'cpc-cart-multiline' : ''\"]"
    );
  }

  get costReuslt() {
    return $("//b[contains(text(),'Total Estimated Cost:')]");
  }
}

module.exports = Estimate;
