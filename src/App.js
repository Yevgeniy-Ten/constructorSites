import {Content} from "./js/classes/Content";
import {models} from "./js/models";
import {Panel} from "./js/classes/Panel";

export class App {
    init() {
        const $site = new Content("#content")
        $site.render(models)
        const contentUpdater = newBlock => {
            models.push(newBlock)
            $site.render(models)
        }
        new Panel("#panel", contentUpdater)
    }
}