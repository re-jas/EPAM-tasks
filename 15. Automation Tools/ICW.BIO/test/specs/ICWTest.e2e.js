const NewPaste = require("../pageobjects/newPaste.page");

describe("I Can Win", () => {
  let code = "Hello from WebDriver";
  let title = "helloweb";
  it("Creation of a New Paste", async () => {
    await NewPaste.open();
    await NewPaste.newPaste(code, title);
  });
});
