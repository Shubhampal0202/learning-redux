import { combineReducers } from "redux";
import BallReducer from '../Redux/BallReducer'
import BatReducer from "../Redux2/BatReducer";
console.log("rootReducer")
const rootReducer = combineReducers({
    ball: BallReducer,
    bat: BatReducer
})
export default rootReducer;