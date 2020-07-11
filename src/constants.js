export const COLS = 10;
export const ROWS = 20;
export const SHAPES =
{
    DEFAULT: {
        shape: [[0]],
        color: 'white',
    //I-Shape
    },
    I: {
        shape: [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],
        color: 'cyan',
    },

    //L-Shape
    L: {
        shape: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0],
        ],
        color: 'blue',
    },
    //Mirrored L-Shape
    J: {
        shape: [
            [0, 0, 1],
            [0, 0, 1],
            [0, 1, 1],
        ],
        color: 'orange',
    },
    //O-Shape
    O: {
        shape: [
            [1, 1],
            [1, 1],
        ],
        color: 'yellow',
    },
    //Z-Shape
    Z: {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
        ],
        color: green,
    },
    //S-Shape
    S: {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
        ],
        color: red,
    },
    //T-Shape
    T: {
        shape: [
            [0, 1, 0],
            [1, 1, 1],
        ],
        color: purple,
    }
};