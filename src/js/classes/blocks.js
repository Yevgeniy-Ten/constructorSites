import {col, css, row} from "../utils";

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
        const {styles = "", alt = "", imgStyles = ""} = this.options
        return row(`<img src=${this.value} alt="${alt}" style="${css(imgStyles)}" />`, css(styles))
    }
}

export class ColumnsModel extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const html = this.value.map(col).join(" ")
        return row(html)
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
    return `
    <form name="${model}">
      <h5 class="text-capitalize">${model}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}