import {ColumnsModel, ImgModel, TextModel, TitleModel} from "./Blocks";

export const TEXT = "text"
export const COLUMNS = "columns"
export const IMG = "img"
export const TITLE = "title"
export const models = {
    [TEXT]: (value, options) => new TextModel(value, options),
    [COLUMNS]: (value, options) => new ColumnsModel(value, options),
    [IMG]: (value, options) => new ImgModel(value, options),
    [TITLE]: (value, options) => new TitleModel(value, options)
}
export const getNewModel = (model, value, options) => {
    return models[model](value, options)
}