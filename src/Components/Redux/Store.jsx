import {createStore} from 'redux';
import BallReducer from './BallReducer';
const store = createStore(BallReducer);
console.log("store....... ", store);
export default store   