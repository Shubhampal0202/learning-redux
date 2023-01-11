let initialState = {
    users: "",
    loading:true
}
console.log("userReducer")
function userReducer(state = initialState, action) {
    switch (action.type) {
        case "success_users":
           return {
            users:action.payload,
            loading: false
           }
        default:
            return state;
    }
}

export default userReducer;

// initially yaha se initial state store me pass hogi  jisme users me "" aur loading me true hoga 