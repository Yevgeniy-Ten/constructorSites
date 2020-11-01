import {row, col, css} from "./utils";

function title(model) {
    const {tag = "h1", styles} = model.options
    return row(col(`<${tag}>${model.value}</${tag}>`), css(styles))
}

function text(model) {
    const {styles} = model.options
    return row(col(`<p>${model.value}</p>`), css(styles))
}

function columns(model) {
    const html = model.value.map(col).join(" ")
    return row(html)
}

function img(model) {
    const {styles} = model.options
    return row(`<img src=${model.value} alt="img" />`, css(styles))
}

export const templates = {
    title, columns, img, text
}