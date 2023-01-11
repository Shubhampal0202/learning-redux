import React, {useReducer}from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case  "decrement":
            return state - 1;
    }
}// All the changes that are possible to current state handled by single function dispatch

function BallUseReducer() {
    const [balls, dispatch] = useReducer(reducer, 10);

    return (
        <div>
            <h1>Balls</h1>
            <h2> No. of Balls {balls}</h2>
            <button onClick={() => dispatch({ type: "increment" })} style = {{margin:"10px"}}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })} style = {{margin:"10px"}}>-</button>
        </div>
    )
}

export default BallUseReducer