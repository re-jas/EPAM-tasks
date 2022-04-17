const Search = require("../pageobjects/search.page");
const Calculator = require("../pageobjects/calculator.page");
const Estimate = require("../pageobjects/estimate.page");
const estimate = new Estimate();

describe("Hurt Me Plenty", () => {
  it("Open Google Cloud Platform Pricing Calculator", async () => {
    await Search.open();
    await Search.load("Google Cloud Platform Pricing Calculator");
  });

  it("Fill the form", async () => {
    // browser.url(`https://cloud.google.com/products/calculator`);
    await Calculator.fillTheForm("4");
  });

  it("Region is Iowa", async () => {
    await expect(estimate.regionResult).toHaveTextContaining("Region: Iowa");
  });

  it("Commitment term is 1 Year", async () => {
    await expect(estimate.commitTermResult).toHaveTextContaining("Commitment term: 1 Year");
  });

  it("VM class is regular", async () => {
    await expect(estimate.vmClassResult).toHaveTextContaining("VM class: regular");
  });

  it("Instance type is n1-standard-8", async () => {
    await expect(estimate.instanceTypeResult).toHaveTextContaining("Instance type: n1-standard-8");
  });

  it("Local SSD is 2x375 GiB", async () => {
    await expect(estimate.localSsdResult).toHaveTextContaining("Local SSD: 2x375 GiB");
  });

  it("Total Estimated Cost is 5,413.06 per 1 month", async () => {
    await expect(estimate.costReuslt).toHaveTextContaining("Total Estimated Cost: USD 5,413.06 per 1 month");
  });

});
