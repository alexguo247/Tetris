import {player} from './main';

class Board {

  /*---------------- CONSTRUCTOR ---------------- */
  constructor(width, height) {
    const matrix = [];
    while(height--)
    {
      matrix.push(new Array(width).fill(0));
    }
    this.matrix = matrix;
  }

  /*---------------- IMPORTANT FUNCTIONS ----------------*/
  //Clear a row
  clear(){
    this.matrix.forEach(row => row.fill(0));
  }

  //Check if the player piece collides with anything on the board
  collide (player) {
    const m = player.matrix;
    const o = player.pos;
    for(let y = 0; y < m.length; y++)
    {
      for(let x = 0; x < m[y].length; x++)
      {
        if(m[y][x] !== 0 && (this.matrix[y+o.y] && this.matrix[y+o.y][x+o.x]) !== 0)
        {
          return true;
        }
      }
    }
    return false;
  }

  //Row sweep function when a full row is filled with tetromino pieces
  sweep(){
    let rowCount = 1;
    let rowCountScore = rowCount;
    outer: for (let y = this.matrix.length - 1; y > 0; y--)
    {
      for(let x = 0; x < this.matrix[y].length; x++)
      {
        if(this.matrix[y][x] === 0)
        {
          continue outer;
        }
      }
      const row = this.matrix.splice(y, 1)[0].fill(0);
      this.matrix.unshift(row);
      y++;
      player.score += rowCountScore * 10;
      player.rows += rowCount;
      rowCountScore *= 2;
    }
  }

  //Merge function to combine the matrices of the board and the player
  merge (player){
    player.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if(value !== 0){
          this.matrix[y+player.pos.y][x + player.pos.x] = value;
        }
      })
    })
  }
}

export default Board;