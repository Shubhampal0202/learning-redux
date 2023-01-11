// npm install redux react-redux redux-thunk 
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import asynsRootReducer from './asyncRootReducer'
const store = createStore(asynsRootReducer,applyMiddleware(thunk));
console.log("store")
export default store;
//  store se data  components me jayega connect function ke through aur connect function me pass huwa hai
// mapStateToProps function  jisse first time User component me users "" hai aur loading true hai
// uske baad useEffect me pass function fetchUser run hoga 