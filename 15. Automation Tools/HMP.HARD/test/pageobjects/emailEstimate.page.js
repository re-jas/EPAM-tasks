const Estimate = require("./estimate.page");

class EmailEstimate extends Estimate {
  get emailEstimateButton() {
    return $("#email_quote");
  }

  get emailAddress() {
    return $('//input[@id=(//label[contains(text(), "Email")]/@for)]');
  }

  get emailSendButton() {
    return $("(//button[normalize-space()='Send Email'])[1]");
  }

  async sendMessage() {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await this.emailEstimateButton.click();
    await this.emailAddress.setValue(["Shift", "Insert"]);
    await this.emailSendButton.waitForClickable();
    await this.emailSendButton.click();
  }

  async getFinalCost() {
    await browser.switchWindow("google");
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    return super.costReuslt;
  }
}

module.exports = EmailEstimate;
