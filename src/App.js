import React from 'react';
import ScriptTag from 'react-script-tag';
import './app.css';
const App = () => {
  
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
