import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools());
console.log("store")
export default store;