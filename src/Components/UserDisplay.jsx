import React from "react";

const UserDisplay = (props) => {
    const [display, updateDisplay] = useState({
        points: 0,
        level: 0
    });

    const handleChange = () => {
        setPoints();
        setLevel();
    }
    
    return(
        <div>
            <div>
                <h1>TETRIS</h1>
            </div>
            <div>
                <p>Score: {points}</p>
                <p>Level: {level}</p>
            </div>
            <button onClick="play()" class="play-button">Play</button>
        </div>
    );
}

export default UserDisplay;