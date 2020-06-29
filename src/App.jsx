import React from 'react';
import Board from './Components/Board'
import {ROWS, COLS, BLOCK_SIZE} from './constants';

const App = () => {
  const canvas = document.getElementById('board');
  const ctx = canvas.getContext('2d');

  ctx.canvas.width = COLS * BLOCK_SIZE;
  ctx.canvas.height = ROWS * BLOCK_SIZE;
  ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
  return (
    <Board />
  );
}

export default App;
