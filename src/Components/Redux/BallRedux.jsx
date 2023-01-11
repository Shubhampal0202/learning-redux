import React from 'react'
import { connect } from "react-redux"
function BallRedux(props) {
    console.log("Ballprops " + props.buyBall);
    return (
        <div>
            <h1>Balls</h1>
            <h1>No. of Balls {props.balls}</h1>
            <button onClick={props.buyBall}>+</button>
            <button onClick={props.sellBall}>-</button>
        </div>
    )
}
const mapStateToProps = (store) => {
    console.log("store "+ store)
    return store; 
}
const mapDispatchToProps = (dispatch) => {
    console.log("Ball dispatch")
    return {
        sellBall: () => {
            dispatch({
                type: "decrement"
            })
        },

        buyBall: () => {
            dispatch({
                type: "increment"
            })
        }
    }
}
// redux me code ka flow importent hai how is not so importent.
export default connect(mapStateToProps, mapDispatchToProps)(BallRedux) // this is like function currying

// or
// const connectedWithPropsFun = connect(mapStateToProps, mapDispatchToProps);
// const connectedWithBall = connectedWithPropsFun(BallRedux);
// export default connectedWithBall

  // connect function give access to the component to two things 
  // first store => mapStateToProps
  // second => dispatch =>mapDispatchToProps
  // connect function component ko store se connect karta hai basically connect function tho(two) function leta hai 
  // as a argument first function component ko state se store se connect karata hai aur second function 
  // dispatch ka logic provide karata hai
  // mapStateToProps and mapDispatchToProps jo bhi return karte hai vo component me as props recieve kar
  // liye jate hai 
  // mapStateToProps function as a argument store ko recieve karta hai ye redux me define hai aur 
  // mapStateToProps function ka name kuch bhi ho sakta hai.
  // aise hi mapDispatchToProps function dispatch ko recieve karta hai as a argument iska bhi name kuch bhi 
  // ho skta hai 
  // jaise hi dispatch function call hoga ye object ko reducer function ke action parameter me pass kar deta hai.




// Steps 
// 1) First create initial state and reducer function (here BallReducer.jsx)
// 2) Create store and pass reducer to store 
// 3) Pass the store to App.js and wrap the App by Provider
 // 4) import connect function. provider ke baad cheeje pahuchti hai connect ke pass.
 // aur wala banda store ko pass karta hai mapStateToProps function me.
 // 5) mapStateToProps function is used to provide the store data to components as a props
 // 6)  we create small functions inside the mapDispatchToProps and these functions are passed to components as a 
 // props