const Search = require("../pageobjects/search.page");
const Calculator = require("../pageobjects/calculator.page");
const TempMail = require("../pageobjects/10minutemail.page");

describe("HARDCORE", () => {
    it("Open Google Cloud Platform Pricing Calculator", async () => {
      await Search.open();
      await Search.load("Google Cloud Platform Pricing Calculator");
    });

  it("Fill the form", async () => {
    await Calculator.fillTheForm("4");
  });

  it("Send and check the email", async () => {
    let mailCost = await TempMail.receiveMessage();
    await expect(TempMail.getFinalCost()).toHaveTextContaining(mailCost);

  });
});
