import React from 'react';
import Main from './Components/main'
import ScriptTag from 'react-script-tag';
import './app.css';
const App = () => {
  const canvas = document.getElementById('tetris');
  const context = canvas.getContext('2d');
  context.scale(30, 30);
  return (
    <>
        <ScriptTag type="text/javascript" src="./Components/player.js" />
        <ScriptTag type="text/javascript" src="./Components/board.js" />
        <ScriptTag type="text/javascript" src="./Components/tetris.js" />
        <ScriptTag type="text/javascript" src="./Components/main.js" />
    </>
    
  );
} 

export default App;
