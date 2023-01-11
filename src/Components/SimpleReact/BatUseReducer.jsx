import React, { useReducer } from 'react'

function BatUseReducer() {
    let initialState = {
        Bat: 10,
        value: ""
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "sell_bat":
                if (state.Bat - state.value < 0) {
                    alert(" Bats are out of stock");
                    return {
                        ...state,
                        value: ""
                    }
                }else{
                    return {
                        Bat: state.Bat - Number(state.value),
                        value: ""
                    }
                }
               
                break;
            case "buy_bat":
                return {
                    Bat: state.Bat + Number(state.value),
                    value: ""
                }
                break;
            case "set_value":
                return {
                    Bat: state.Bat,
                    value: action.payload
                }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Bats</h1>
            <h2>No. of Bat {state.Bat}</h2>
            <input type="text" value={state.value} onChange={(e) => {
                let value = e.target.value;
                dispatch({ type: "set_value", payload: value })
            }} />
            <br />
            <button onClick={() => {
                dispatch({ type: "sell_bat" })
            }}>Sell Bat </button>
            <br />
            <button onClick={() => {
                dispatch({ type: "buy_bat" })
            }}>Buy Bat</button>
        </div>
    )
}

export default BatUseReducer;