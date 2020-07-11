import React, {useState} from 'react';
import '../index.css';
import {COLORS, SHAPES} from '../constants';

const Cell = (props) => {
    //Get Random Tetromino Function
    const getRandomTetromino = () => {
        return Math.floor(Math.random() * 7 + 1);
    }
    const [tetromino, displayTetromino] = useState(getRandomTetromino());
    const coordinates = props.coordinates;

    

    return(
        <div>
            {coordinates.map((dot, i) => {
                const style = {  
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                }
                return(
                    <div 
                        className="cell" 
                        key={i} 
                        style={style}

                    >
                    </div>
                );
            })}
        </div>
    );
}

export default Cell;
