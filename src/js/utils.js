export function row(content, styles = "") {
    return `<div style="${styles}" class="row">${content}
    </div>`
}

export function col(content, style) {
    return `<div class="col-sm" style="${style}">${content}
    </div>`
}

export function css(styles = {}) {
    // если стили приходят в формате color:green; то можно применять в таком виде
    if (typeof styles === "string") return styles;
    // если стили приходят в формате {color:green;} то нужно привести к строке
    const toStyles = key => `${key}: ${styles[key]}`
    return Object.keys(styles).map(toStyles).join(";")
}
