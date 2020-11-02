import {addBlockForm} from "./Blocks";
import {getNewModel, TEXT, COLUMNS, IMG, TITLE} from "./reducer";

export class Panel {
    constructor(selector, contentUpdater) {
        this.$el = document.querySelector(selector)
        this.contentUpdater = contentUpdater;
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML("afterbegin", this.template)
        this.addModel = this.addModel.bind(this)
        this.$el.addEventListener("submit", this.addModel)
    }

    addModel(event) {
        event.preventDefault()
        const model = event.target.name
        getNewModel(model)
        let value = event.target.value.value
        let colStyles;
        let imgAlt;
        let imgStyles;
        if (model === COLUMNS) {
            value = value.split("&")
            colStyles = event.target.colStyles.value
        }
        if (model === IMG) {
            imgStyles = event.target.imgStyles.value
            imgAlt = event.target.imgAlt.value
        }
        const styles = event.target.styles.value
        const newModel = getNewModel(model, value, {styles, colStyles, imgAlt, imgStyles})
        this.contentUpdater(newModel)
        event.target.value.value = "";
        event.target.styles.value = ""
        event.target.imgStyles.value = ""
        event.target.imgAlt.value = ""
        event.target.colStyles.value = ""
    }

    get template() {
        return [
            addBlockForm(TEXT),
            addBlockForm(TITLE),
            addBlockForm(IMG),
            addBlockForm(COLUMNS),
        ].join(" ")
    }

    destroy() {
        this.$el.removeEventListener("submit", this.addModel)
    }
}

