import { combineReducers } from "redux";
import BallReducer from '../Redux/BallReducer'
import BatReducer from '../Redux2/BatReducer'
import userReducer from "./userReducer";
const asynsRootReducer = combineReducers({
    ball: BallReducer,
    bat: BatReducer,
    users: userReducer
})
export default asynsRootReducer;