import React from 'react';
import Board from './board';
import Player from './player';

class Main extends React.Component{
    constructor () {
        //colors for different pieces
        this.color = [
            null,
            'purple', //T
            'yellow', //O
            'orange', //L
            'blue', //J
            'green', //S
            'red', //Z
            'aqua' //L
        ]
        //update function for board
        let lT = 0;
        const update = (t = 0) => {
            const dT = t - lT; //Find change in time
            lT = t; 
            player.update(dT); //Update player position
            this.draw(); //Draw board
            requestAnimationFrame(update); //Update canvas
        }
    }
    createPiece(type) {
        if(type === 'T'){
        return [
            [0, 0, 0],
            [1 , 1, 1],
            [0, 1, 0],
        ];
    }
        else if(type === 'O'){
            return[
                [2, 2],
                [2, 2],
            ]
        }
        else if(type === 'L'){
            return [
                [0, 3, 0],
                [0, 3, 0],
                [0, 3, 3]
            ]
        }
        else if(type === 'J'){
            return [
                [0, 4, 0],
                [0, 4, 0],
                [4, 4, 0]
            ]
        }
        else if(type === 'S'){
            return [
                [0, 5, 5],
                [5, 5, 0],
                [0, 0, 0],
            ]
        }
        else if(type === 'Z'){
            return [
                [6, 6, 0],
                [0, 6, 6],
                [0, 0, 0],
            ]
        }
        else if(type === 'I'){
            return [
                [0, 7, 0, 0],
                [0, 7, 0, 0],
                [0, 7, 0, 0],
                [0, 7, 0, 0],
            ]
        }
    }

    draw() {
        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);
        this.drawMatrix(board.matrix, {x: 0, y: 0}) //Drawing the arena
        this.drawMatrix(player.matrix, player.pos); //Drawing the player
    }

    //Drawing a matrix
    drawMatrix(matrix, offset){
        matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0){
                //Black border for piece
                context.fillStyle="black";
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
                //Selecting color from array in constructor
                context.fillStyle=this.color[value];
                context.fillRect(x + offset.x + 0.055, y + offset.y + 0.055, 0.9, 0.9);
            }
        });
    });
    }

    updateScore(){
        document.getElementById('score').innerText = "Score: " + player.score;
    }

    player = Player;
    board = Board(12, 20);
    componentDidMount() {
        document.addEventListener('keydown', event => {
            //Left
            if(event.keyCode === 37)
            {
                player.move(-1);
            }
            //Right
            else if(event.keyCode === 39)
            {
                player.move(1);
            }
            //Down
            else if(event.keyCode === 40)
            {
                player.drop();
            }
            //Up
            else if(event.keyCode === 38)
            {
                player.rotate(1);
            }
            //Z
            else if(event.keyCode === 90){
                player.rotate(-1);
            }
            //Space Bar
            else if(event.keyCode === 32)
            {
                player.hardDrop();
            }
        })
    }

    update();
    updateScore();

    render() {
        return <div></div>;
    }
}


export {player, tetris, board, canvas, context, createPiece, updateScore};
