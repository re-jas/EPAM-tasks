const Page = require("./page");

class CreatedPaste extends Page {
  get syntaxBox() {
    return $("a.btn.-small.h_800");
  }

  get codeBox() {
    return $("textarea");
  }
}

module.exports = new CreatedPaste();
