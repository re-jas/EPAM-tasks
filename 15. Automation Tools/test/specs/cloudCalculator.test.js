const SearchPage = require("../pageobjects/search.page");
const CalculatorPage = require("../pageobjects/calculator.page");
const TempMailoPage = require("../pageobjects/tempMailo.page");
const EmailEstimate = require("../pageobjects/emailEstimate.page");

const searchPage = new SearchPage();
const calculatorPage = new CalculatorPage();
const tempMailoPage = new TempMailoPage();
const emailEstimate = new EmailEstimate();

describe("Find out cost of Google Cloud", () => {
  it("Open Google Cloud Platform Pricing Calculator", async () => {
    await searchPage.open();
    await searchPage.load("Google Cloud Platform Pricing Calculator");
  });

  it("Fill the form", async () => {
    await calculatorPage.fillTheForm("4");
  });

  it("Region is Iowa", async () => {
    await expect(calculatorPage.regionResult).toHaveTextContaining(
      "Region: Iowa"
    );
  });

  it("Commitment term is 1 Year", async () => {
    await expect(calculatorPage.commitTermResult).toHaveTextContaining(
      "Commitment term: 1 Year"
    );
  });

  it("VM class is regular", async () => {
    await expect(calculatorPage.vmClassResult).toHaveTextContaining(
      "VM class: regular"
    );
  });

  it("Instance type is n1-standard-8", async () => {
    await expect(calculatorPage.instanceTypeResult).toHaveTextContaining(
      "Instance type: n1-standard-8"
    );
  });

  it("Local SSD is 2x375 GiB", async () => {
    await expect(calculatorPage.localSsdResult).toHaveTextContaining(
      "Local SSD: 2x375 GiB"
    );
  });

  it("Total Estimated Cost is 5,413.06 per 1 month", async () => {
    await expect(calculatorPage.costReuslt).toHaveTextContaining(
      "Total Estimated Cost: USD 5,413.06 per 1 month"
    );
  });

  it("Send the email", async () => {
    let mailCost = await tempMailoPage.receiveMessage();
    await expect(emailEstimate.getFinalCost()).toHaveTextContaining(mailCost);
  });
});
