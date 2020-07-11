import React, {useState, useEffect, useCallback}  from 'react';
import Cell from './Cell';
import {ROWS, COLS} from '../constants';
import '../index.css';

const Board = (props) => {

  /*---------------- STATE ---------------- */
  //Defining board variable 
  const [grid, changeGrid] = useState(createBoard());
  //User action variable
  const [action, setAction] = useState('DOWN'); 
  //Tetromino variable
  const [tCoords, setTCoords] = useState('[0, 15]');
  //Game over variable
  const [gameOver, setGameOver] = useState(false);



  /*---------------- IMPORTANT FUNCTIONS ----------------*/
  //Create Board Function
  const createBoard = () => {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  } 
  //Valid Move Function
  const validMove = (player, {x: moveX, y: moveY}) => {
    for(let y = 0; y < player.tetromino.length; y++)
    {
      for(let x = 0; x < player.tetromino[y].length; x++)
      {
        if(player.tetromino[y][x] !== 0)
        {
          if(
            
          ){
            return true;
          }
        }
      }
    }
    return false;
  }

  

  const movement = useCallback((event) => {
    //Left
    if(event.keyCode === 37) {
      setAction('LEFT');
    }
    //Up (rotate clockwise)
    if(event.keyCode === 38) {
      setAction('ROTATE');
    }
    //Right
    if(event.keyCode === 39) {
      setAction('UP');
    }
    //Down
    if(event.keyCode === 40) {
      setAction('DOWN');
    }
    //Space
    if(event.keyCode === 32){
      setAction('DROP');
    }

  }, []);

  useEffect(() => {
    document.addEventListener("keydown", movement, false);
    return () => {
      document.removeEventListener("keydown", movement, false);
    };
  }, []);

  const rotateTetromino = (num) => {

  }

  const hardDrop = () => {

  }

  const moveTetromino = () => {
    let x = tCoords[0];
    let y = tCoords[1];
    switch(action)
    {
      case 'RIGHT':
        x += 1;
        break;
      case 'LEFT':
        x-=1;
        break;
      case 'DOWN':
        y-=1;
        break;
      case 'ROTATE':
        rotateTetromino();
        break;
      case 'DROP':
        hardDrop();
        break;
    }
  }

  return (
    <div className="board">
      <Cell coordinates={tCoords}/>
    </div>  
  )
}

export default Board;