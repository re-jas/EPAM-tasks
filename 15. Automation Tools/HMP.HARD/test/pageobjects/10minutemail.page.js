const EmailEstimate = require("./emailEstimate.page");

class TempMail extends EmailEstimate {
  get copyAddress() {
    return $("//button[@class='iconx']");
  }

  get refresh() {
    return $("//div[@class='primaryCommands']//div[2]//button[1]");
  }

  get newMessage() {
    return $(
      "//div[@class='mail-item-sub'][contains(text(),'Google Cloud Price Estimate')]"
    );
  }
  
  get totalCost() {
    return $("tbody tr td:nth-child(2) h3:nth-child(1)");
  }

  openMail() {
    return browser.newWindow(`https://tempmailo.com/`);
  }

  async receiveMessage() {
    await this.openMail();
    await this.copyAddress.waitForClickable();
    await this.copyAddress.click();

    await browser.switchWindow("google");
    await super.sendMessage();

    await browser.switchWindow("tempmailo");
    await browser.pause(6000);
    await this.refresh.click();
    await this.newMessage.waitForExist({ timeout: 20000 });
    await this.newMessage.click();
    await browser.switchToFrame(1);
    let cost = await this.totalCost.getText();
    return cost;
  }
}

module.exports = new TempMail();
