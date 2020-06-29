export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;
export const COLORS = 
[
    'cyan',
    'blue',
    'orange',
    'yellow',
    'green',
    'red',
    'purple' 
];
export const SHAPES =
[
    //I-Shape
    [
        [0, 1, 0, 0]
        [0, 1, 0, 0]
        [0, 1, 0, 0]
        [0, 1, 0, 0]
    ],
    //L-Shape
    [
        [1, 0, 0]
        [1, 0, 0]
        [1, 1, 0]
    ],
    //Mirrored L-Shape
    [
        [0, 0, 1]
        [0, 0, 1]
        [0, 1, 1]
    ],
    //O-Shape
    [
        [1, 1]
        [1, 1]
    ]
    //Z-Shape
    [
        [1, 1, 0]
        [0, 1, 1]
    ]
    //S-Shape
    [
        [0, 1, 1]
        [1, 1, 0]
    ]
    //T-Shaoe
    [
        [0, 1, 0]
        [1, 1, 1]
    ]
]