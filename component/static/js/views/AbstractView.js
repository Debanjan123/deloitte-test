export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }
  getCellValue(details, variable) {
    console.log(details[variable]);
    return details[variable];
  }

  async getHtml() {
    return ``;
  }
}
