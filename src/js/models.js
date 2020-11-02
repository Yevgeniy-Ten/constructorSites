import img from "../imgs/some-img.png"
import {TitleModel, TextModel, ColumnsModel, ImgModel} from "./classes/Blocks";

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
    new TextModel("Это пример какого нибудь параграфа (текста)", {
        styles: {
            margin: "20px 0",
            "background-color": "#ccc",
            "font-weight": "500"
        }
    }),
    new ColumnsModel(["Первая колонка", "Вторая колонка", "Третья колонка"], {
        colStyles: {
            height: "200px",
            border: "1px solid gray"
        },
        styles: {
            "background": "rgba(0,0,0,0.3)"
        }
    }),
    new ImgModel(img, {
        imgStyles: {
            width: "100%",
            display: "block",
            "object-fit": "contain",
            height: "100%"
        },
        imgAlt: "some-img",
        styles: {
            padding: "10px 0",
            height: "200px"
        }
    }),
]