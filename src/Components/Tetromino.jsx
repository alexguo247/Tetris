import React, {useState, useEffect, useCallback} from 'react';

const Tetromino = (props) => {
    let x, y, color, shape;

    const randomPick = () => {
      return Math.floor(Math.random() * 7 + 1);
    }
    //Arrow Key functions
    const movement = useCallback((event) => {
        //Left
        if(event.keyCode === 37) {
          x-=1;
        }
        //Up (rotate)
        if(event.keyCode === 38) {
            x-=1;
        }
        //Right
        if(event.keyCode === 39) {
            x+=1;
        }
        //Down
        if(event.keyCode === 40) {
            y-=1;
        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", movement, false);
        return () => {
          document.removeEventListener("keydown", movement, false);
        };
      }, []);

    return(
        <div></div>
    )
}

export default Tetromino;
