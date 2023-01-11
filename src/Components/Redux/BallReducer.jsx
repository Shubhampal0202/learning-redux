let initialState = {
    balls: 10
}

function BallReducer(state = initialState, action) {
    console.log("BallReducer")
    switch (action.type) {
        case "increment":
            return {
                balls: state.balls + 1
            };
        case "decrement":
            return {
                balls: state.balls - 1
            };
        default:
            return state;
    }
}

export default BallReducer;
// reducer function me state kin kin tareeko se change ho skti hai vo sare logic likhe hote hai aur ye function 
// updated state ko return karta hai (aur state object ko hamesha new reference dete hai)



// Redux Terminology
// Redux: Redux is an open-source JavaScript library used to manage application state. React uses Redux for 
// building the user interface.
// React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store,
// and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage
// state through a unidirectional data flow model. React Redux is conceptually simple. It subscribes to the Redux
// store, checks to see if the data which your component wants have changed, and re-renders your component.

// Single source of truth: The state of your whole application is stored in an object tree within a single store.
// State is read-only :The only way to change the state is to emit an action an object describing what happened.
// Action: Action is plain javascript object that contains information.
// Reducer : Reducer is function that takes the current state and an action as arguments, and return a new state 
// result. Basically it impliment the state change logic.  In other words, (state, action) => newState .
// store : store is a javaScript object. It contains the whole state tree of the application.
// Dispatch : dispatch is a method that provide an action object to reducer function.
// connect mapStateToProps ko store aur mapDispatchToProps ko dispatch provide karta hai.
// connect function connects the store to your component.
// mapStateToProps: It is a function that is used to provide the store data as a props to your component.
// Any time the store is updated, mapStateToProps will be called. 
// mapDispatchToProps : It is a function that is used to provide the action creators as a props to your component.
// Provider:  The <Provider> component makes the Redux store available to any nested components that need to access 
// the Redux store.
// In Redux, subscriptions are called after the root reducer has returned the new state