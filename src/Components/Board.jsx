import React, {useState, useEffect}  from 'react';
import Tetromino from './Tetromino';
import {ROWS, COLS, BLOCK_SIZE} from '../constants';
import './Board.css';

const Board = () => {
    let grid;
    const createBoard = () => {
        Array.from(Array(ROWS), () =>
            new Array(COLS).fill([0, 'clear'])
        )
    }
    const isEmpty = (x,y) => {
        return grid[y] && grid[y][x] === 0;
    }

    const rotate = (piece) => {
        // Clone with JSON for immutability.
        let p = JSON.parse(JSON.stringify(piece));
        // Transpose matrix
        for (let y = 0; y < p.shape.length; ++y) {
          for (let x = 0; x < y; ++x) {
            [p.shape[x][y], p.shape[y][x]] = [p.shape[y][x], p.shape[x][y]];
          }
        }
        // Reverse the order of the columns.
        p.shape.forEach(row => row.reverse());
        return p;
    }

    useEffect(() => {
        const interval = setInterval(() => {
          console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
    }, []);
}

export default Board;