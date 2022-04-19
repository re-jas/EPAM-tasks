const PastebinPage = require("../pageobjects/pastebin.page");
const NewCreatedPastePage = require("../pageobjects/createdPaste.page");

const pastebinPage = new PastebinPage();
const newCreatedPastePage = new NewCreatedPastePage();

describe("Create paste in Pastebin", () => {
  let code =
    'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force';
  let title = "how to gain dominance among developers";

  it("Creation of a New Paste", async () => {
    await pastebinPage.open();
    await pastebinPage.newPaste(code, title);
  });

  it("Browser page title matches Paste Name / Title", async function () {
    await expect(newCreatedPastePage.showPageTitle).toHaveTextContaining(title);
  });

  it("Syntax is suspended for bash", async function () {
    await expect(newCreatedPastePage.syntaxBox).toHaveTextContaining("Bash");
  });

  it("Check that the code matches the one entered in paragraph 2", async function () {
    await expect(newCreatedPastePage.codeBox).toHaveTextContaining(code);
  });
});
