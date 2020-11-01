import {addBlockForm, TitleModel, ImgModel} from "./blocks";
import {TextModel} from "./blocks";

export class Panel {
    constructor(selector, contentUpdater) {
        this.$el = document.querySelector(selector)
        this.contentUpdater = contentUpdater;
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML("afterbegin", this.template)
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener("submit", this.clickHandler)
    }

    clickHandler(event) {
        event.preventDefault()
        const model = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        let newModel = null;
        if (model === "text") {
            newModel = new TextModel(value, {styles})
        } else if (model === "title") {
            newModel = new TitleModel(value, {styles})
        } else if (model === "img") {
            newModel = new ImgModel(value, {styles})
        }
        this.contentUpdater(newModel)
        event.target.value.value = "";
        event.target.styles.value = ""
    }

    get template() {
        return [
            addBlockForm("text"),
            addBlockForm("title"),
            addBlockForm("img"),
            addBlockForm("columns"),
        ].join(" ")
    }
}

