import React, {useState, useCallback} from 'react';
import {SHAPES} from '../constants';

const Player = () => {
    const [player, setPlayer] = useState({
        pos: {
            x: 0,
            y: 0
        },
        type: SHAPES[0].shape,
        collided: false
    })
}
export default Player;