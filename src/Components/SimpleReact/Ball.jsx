import React, { useState } from 'react'
import { useReducer } from 'react'

function Ball() {
    const [balls, setBalls] = useState(0);
    const increment = () => {
        setBalls(balls + 1);
    }

    const decrement = () => {
        setBalls(balls - 1);
    }
    return (
        <div>
           <h1>Balls</h1>
            <h1>No. of Balls {balls}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )    
}

export default Ball