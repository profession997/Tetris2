/*** default config and style ***/

const TETRIS = {
    //俄羅斯寬有幾格。
    WIDTH: 10,
    //俄羅斯高有幾格。
    HEIGHT: 21
};

const STYLE = {
    //線寬。
    LINE_PIXEL: 4,
    //每一個格子的寬度。（包括線的部分）
    GRID_PIXEL: 35,
    //擦掉最上面幾行。
    ERASE_LINE_COUNT: 1
}

const COLOR = {
    //背景線的顏色。
    BACKGROUND_STROKE: "rgb(34,34,34)",
    //雙色相間的背景格子色。
    BACKGROUND_FILL: ["rgb(43,43,43)", "rgb(47,47,47)"],
    //依照不同種類的俄羅斯方塊給予不同的顏色。
    TETRIMINO: {
        I: "rgb(50,190,250)",
        J: "rgb(68,100,233)",
        L: "rgb(255,126,37)",
        O: "rgb(255,194,37)",
        S: "rgb(124,212,36)",
        T: "rgb(210,76,173)",
        Z: "rgb(250,50,90)"
    }
};

//每種俄羅斯方塊以及每個方向時的樣子。
const TETRIMINO = {
    I: [["0,1", "1,1", "2,1", "3,1"], ["2,0", "2,1", "2,2", "2,3"], ["0,2", "1,2", "2,2", "3,2"], ["1,0", "1,1", "1,2", "1,3"]],
    J: [["0,0", "0,1", "1,1", "2,1"], ["1,0", "2,0", "1,1", "1,2"], ["0,1", "1,1", "2,1", "2,2"], ["0,2", "1,0", "1,1", "1,2"]],
    L: [["0,1", "1,1", "2,1", "2,0"], ["1,0", "1,1", "1,2", "2,2"], ["0,1", "0,2", "1,1", "2,1"], ["0,0", "1,0", "1,1", "1,2"]],
    O: [["1,0", "2,0", "1,1", "2,1"]],
    S: [["1,0", "2,0", "0,1", "1,1"], ["1,0", "1,1", "2,1", "2,2"], ["1,1", "2,1", "0,2", "1,2"], ["0,0", "0,1", "1,1", "1,2"]],
    T: [["0,1", "1,0", "1,1", "2,1"], ["1,0", "1,1", "1,2", "2,1"], ["0,1", "1,1", "2,1", "1,2"], ["0,1", "1,0", "1,1", "1,2"]],
    Z: [["0,0", "1,0", "1,1", "2,1"], ["1,1", "1,2", "2,0", "2,1"], ["0,1", "1,1", "1,2", "2,2"], ["0,1", "0,2", "1,0", "1,1"]]
};

const KEY = {
    ENTER: "Enter",
    SPACE: " ",
    CONTROL: "Control",
    Z: "z",
    X: "x",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft"
}

/*** enum ***/

const STATUS = {
    EMPTY: 0,
    OCCUPIED: 1
};

const DIRECTION = {
    ANTICLOCKWISE: 0,
    CLOCKWISE: 1,
    TOP: 2,
    RIGHT: 3,
    DOWN: 4,
    LEFT: 5
}
