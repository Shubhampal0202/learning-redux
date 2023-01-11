import {createStore} from "redux";
import BatReducer from "./BatReducer";
const store =  createStore(BatReducer);
console.log("batStore ", store);
export  default store; 

// import {createStore} from 'redux';
// import BallReducer from './BallReducer';
// const store = createStore(BallReducer);
// console.log("store....... ", store);
// export default store