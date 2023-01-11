import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import userFetchMiddleWare from './userMiddleWare';
function User(props) {
    useEffect(function fn() {
        props.fetchUser();
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {
                props.loading === true ? <h3>Loading...</h3> :
                    <h2>{props.users.map((user) => {
                        return <h3>{user.name}</h3>
                    })}</h2>
            }
        </div>
    )
}

const mapStateToProps = (store) => {
    return store.users;
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => {
            // yaha per dispatch function userFetchMiddleWare Function ko call karta hai 
            return dispatch(userFetchMiddleWare)// yaha per agar koi object pass kiya gya hota to reducer function call 
            // hota but yaha userFetchMiddleWare function pass kiya gya hai jo async wala kaam karega aur waha se 
            // dispatch function object pass karega
        }
    }
}
// redux me code ka flow importent hai how is not so importent.
export default connect(mapStateToProps, mapDispatchToProps)(User)

