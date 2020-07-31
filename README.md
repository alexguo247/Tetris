<h1>Tetris Made With React</h1>

As a huge fan and longtime Tetris player, I wanted to learn more about React while creating something familiar and interactive. Although I know now that the React framework is not suited towards playing games, it was an enjoyable experience. I used 3 main Class components (Board, Player, and a Main Class to hold global variables). The Board Class creates the overall tetris board, represented by a 12 x 20 matrix filled with 0's. The principle behind this React game is modifying the board matrix and having the pieces represented by different numbers inside the matrix. The board has 4 functions: a clear function to clear one row of lines, a collide function to check whether the player's position interferes with the board dimensions or pieces already put on the board, a sweep function when a player clears a line, and a merge function to combine the board matrix and the player matrix. The Player Class holds the player's position along with any functions that allow the Player to interact with the piece (i.e. moving, rotating, dropping/hard dropping, etc.) These were then exported to the React App and then rendered onto the website. The Board / Tetris pieces were drawn using HTML canvas and updated using the requestAnimationFrame method. 

The demo is shown below. 

![Tetris-Demo](https://media.giphy.com/media/UUys0oD6g8vi3UAgb6/giphy.gif)
