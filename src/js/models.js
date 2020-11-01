import img from "../imgs/some-img.png"
import {TitleModel, TextModel, ColumnsModel, ImgModel} from "./classes/blocks";

export const models = [
    new TitleModel("Конструктор сайтов от Евгения", {
        tag: "h1",
        styles: {
            background: "#4a4a4a",
            color: "#fff",
            'text-align': "center",
            'padding': "10px 0",
        }
    }),
    new TextModel("Here we go some text", {
        styles: {
            margin: "20px 0"
        }
    }),
    new ColumnsModel(["11111111", "2222222", "3333333153"]),
    new ImgModel(img, {
        imgStyles: {
            width: "100%",
            display: "block",
            "object-fit": "contain",
            height: "100%"
        },
        alt: "some-img",
        styles: {
            padding: "10px 0",
            height: "200px"
        }
    }),
]