let initialState = {
    bat: 10,
    value: ""
}
console.log("BatReducer")
function BatReducer(state = initialState, action) {
    switch (action.type) {
        case "buy_bat":
            return {
                bat: state.bat + Number(state.value),
                value: ""
            };
        case "sell_bat":
            if ((state.bat - Number(state.value)) < 0) {
                alert("Bat are out of stock")
                return {
                    ...state,
                    value: ""
                }
            } else {
                return {
                    bat: state.bat - Number(state.value),
                    value:""
                };
            }

        case "set_value":
            return {
                bat: state.bat,
                value: action.payload
            }
        default:
            return state;
    }
}
export default BatReducer;