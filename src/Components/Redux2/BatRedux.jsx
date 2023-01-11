import React from 'react'
import { connect } from "react-redux"
function BatRedux(props) {
    console.log("Batprops " + props);
    return (
        <div>
            <h1>Bats</h1>
            <h1>No. of Bats {props.bat}</h1>
            <input type="text" value ={props.value} onChange = {(e)=>{
                let value = e.target.value
                props.setValue(value);
            }} />
            <br />
            <br />
            <button onClick={props.buyBat} style={{marginLeft:"30px"}}>buy</button>
            <button onClick={props.sellBat} style={{marginLeft:"30px"}} >sell</button>
        </div>
    )
}

const mapStateToProps = (store) => {
    console.log("Bat "+ store)
    return store;
}

const mapDispatchToProps = (dispatch) => {
    console.log("Batdispatch")
    return {
        sellBat: () => {
            dispatch({
                type: "sell_bat"
            })
        },

        buyBat: () => {
            dispatch({
                type: "buy_bat"
            })
        },
        setValue: (value) => {
            dispatch({
                type: "set_value",
                payload: value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BatRedux)