const NewPaste = require("../pageobjects/newPaste.page");
const CreatedPaste = require("../pageobjects/createdPaste.page");

describe("Bring It ON", () => {
  let code =
    'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force';
  let title = "how to gain dominance among developers";

  it("Creation of a New Paste", async () => {
    await NewPaste.open();
    await NewPaste.newPaste(code, title);
  });

  it("Browser page title matches Paste Name / Title", async function () {
    await expect(browser).toHaveTitleContaining(title);
  });

  it("Syntax is suspended for bash", async function () {
    await expect(await CreatedPaste.syntaxBox.getText()).toEqual("Bash");
  });

  it("Check that the code matches the one entered in paragraph 2", async function () {
    await expect(await CreatedPaste.codeBox.getText()).toEqual(code);
  });
});
