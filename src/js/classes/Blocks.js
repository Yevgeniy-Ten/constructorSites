import {col, css, row} from "../utils";
import {COLUMNS, IMG} from "./reducer";

class Block {
    constructor(value, options) {
        this.value = value;
        options ? this.options = options : this.options = ""
    }

    toHtml() {
        throw new Error("Метод to Html должен реализован")
    }
}

export class TitleModel extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = "h1", styles = ""} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImgModel extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {styles = "", imgAlt = "", imgStyles = ""} = this.options
        return row(`<img src=${this.value} alt="${imgAlt}" style="${css(imgStyles)}" />`, css(styles))
    }
}

export class ColumnsModel extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {styles = "", colStyles = ""} = this.options
        const html = this.value.map(value => col(value, css(colStyles))).join(" ")
        return row(html, css(styles))
    }
}

export class TextModel extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {styles = ""} = this.options
        return row(`<p>${this.value}</p>`, css(styles))
    }
}

export function addBlockForm(model) {
    let columnInputs = ""
    if (model === COLUMNS) {
        columnInputs = `<div class="form-group">
        <input class="form-control form-control-sm" name="colStyles" placeholder="Column styles">
      </div>`
    }
    let imgInputs = ""
    if (model === IMG) {
        imgInputs = `<div class="form-group">
        <input class="form-control form-control-sm" name="imgStyles" placeholder="Image styles">
      </div><div class="form-group">
        <input class="form-control form-control-sm" name="imgAlt" placeholder="Image Alt">
      </div>`
    }
    return `
    <form name="${model}">
      <h5 class="text-capitalize">${model}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="Value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="Styles">
      </div>
      ${columnInputs}
      ${imgInputs}
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}