const Page = require("./page");

class Calculator extends Page {
  // Instances
  get instances() {
    return $(
      '//input[@id=(//label[contains(text(), "Number of instances")]/@for)]'
    );
  }
  // Operating System
  get os() {
    return $(
      '//md-select[@id=(//label[contains(text(), "Operating System / Software")]/@for)]'
    );
  }

  get osOption() {
    return $(
      "//md-option//div[@class='md-text'][contains(text(),'Free: Debian, CentOS, CoreOS, Ubuntu or BYOL')]"
    );
  }
  // Machine Class
  get machineClass() {
    return $(
      '//md-select[@id=(//label[contains(text(), "Machine Class")]/@for)]'
    );
  }

  get machineClassOption() {
    return $(
      "//md-option[@id='select_option_96']//div[@class='md-text'][normalize-space()='Regular']"
    );
  }
  // Series
  get series() {
    return $('//md-select[@id=(//label[contains(text(), "Series")]/@for)]');
  }

  get seriesOption() {
    return $("//div[@class='md-text ng-binding'][normalize-space()='N1']");
  }
  // Machine Type
  get machine() {
    return $(
      '//md-select[@id=(//label[contains(text(), "Machine type")]/@for)]'
    );
  }

  get machineOption() {
    return $(
      "//div[@class='md-text ng-binding'][normalize-space()='n1-standard-8 (vCPUs: 8, RAM: 30GB)']"
    );
  }
  // Add GPUs
  get addGpus() {
    return $("(//div[@class='md-label'][normalize-space()='Add GPUs.'])");
  }
  // GPY type
  get gpuSelect() {
    return $('//md-select[@id=(//label[contains(text(), "GPU type")]/@for)]');
  }

  get gpuOption() {
    return $(
      "//div[@class='md-text ng-binding'][normalize-space()='NVIDIA Tesla V100']"
    );
  }
  // Number of GPUs
  get numOfGpu() {
    return $(
      '//md-select[@id=(//label[contains(text(), "Number of GPUs")]/@for)]'
    );
  }

  get numOfGpuOption() {
    return $("//div[@class='md-text ng-binding'][normalize-space()='1']");
  }
  // Local SSD
  get localSsd() {
    return $('//md-select[@id=(//label[contains(text(), "Local SSD")]/@for)]');
  }

  get localSsdOption() {
    return $(
      "//div[@class='md-text ng-binding'][normalize-space()='2x375 GB']"
    );
  }
  // Datacenter location
  get dataCenter() {
    return $(
      '//md-select[@id=(//label[contains(text(), "Datacenter location")]/@for)]'
    );
  }

  get dataCenterOption() {
    return $(
      "//md-option[@id='select_option_233']//div[@class='md-text ng-binding'][normalize-space()='Iowa (us-central1)']"
    );
  }
  // Committed usage
  get commitedUage() {
    return $(
      '//md-select[@id=(//label[contains(text(), "Committed usage")]/@for)]'
    );
  }

  get commitedUageOption() {
    return $(
      "//md-option[@id='select_option_119']//div[@class='md-text'][normalize-space()='1 Year']"
    );
  }
  // Button
  get addToEstimate() {
    return $(
      "//button[@ng-disabled=\"ComputeEngineForm.$invalid || !listingCtrl.machineType['computeServer']\"]"
    );
  }

  async fillTheForm(inst) {
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);

    await this.instances.setValue(inst);

    await this.os.click();
    await this.osOption.waitForDisplayed();
    await this.osOption.click();

    await this.machineClass.click();
    await this.machineClassOption.waitForDisplayed();
    await this.machineClassOption.click();

    await this.series.click();
    await this.seriesOption.waitForDisplayed();
    await this.seriesOption.click();

    await this.machine.click();
    await this.machineOption.waitForDisplayed();
    await this.machineOption.click();

    await this.addGpus.click();

    await this.gpuSelect.click();
    await this.gpuOption.waitForDisplayed();
    await this.gpuOption.click();

    await this.numOfGpu.click();
    await this.numOfGpuOption.waitForDisplayed();
    await this.numOfGpuOption.click();

    await this.localSsd.click();
    await this.localSsdOption.waitForDisplayed();
    await this.localSsdOption.click();

    await this.dataCenter.click();
    await this.dataCenterOption.waitForDisplayed();
    await this.dataCenterOption.click();

    await this.commitedUage.click();
    await this.commitedUageOption.waitForDisplayed();
    await this.commitedUageOption.click();

    await this.addToEstimate.click();
  }
}

module.exports = new Calculator();
