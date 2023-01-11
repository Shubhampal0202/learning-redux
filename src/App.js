// import Ball from "./Components/SimpleReact/Ball";
import Bat from "./Components/SimpleReact/Bat"
import BatUseReducer from "./Components/SimpleReact/BatUseReducer";
import BallUseReducer from "./Components/SimpleReact/BallUseReducer";
//  import store from "./Components/Redux/Store"; // BallStore
import { Provider } from 'react-redux';
// import store from "./Components/Redux2/Store";// BatStore
import BallRedux from "./Components/Redux/BallRedux";
import BatRedux from "./Components/Redux2/BatRedux";
import User from './Components/asyncRedux/User';
//  import store from "./Components/MultipleReducer/Store"
import store from './Components/asyncRedux/store'
function App() {
  // console.log("batStore", store)
  return (
    <>
      {/* <Ball /> */}
      {/* <div>``````````````````````````````````````</div> */}
      {/* <BallUseReducer /> */}
      {/* <div>``````````````````````````````````````</div> */}
      {/* <Bat /> */}
      {/* <div>``````````````````````````````````````</div> */}
      {/* <BatUseReducer /> */}

      <Provider store={store}>
        {/* <BallRedux />
         <BatRedux /> */}
        <User /> 
      </Provider>
     

    </>
  );
}

export default App;
