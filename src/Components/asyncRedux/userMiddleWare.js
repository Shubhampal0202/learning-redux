// middleware function ko dispatch mil jata hai ye redux me define hai
export default async function userFetchMiddleWare(dispatch){
  let responce = await fetch('https://jsonplaceholder.typicode.com/users');
  let users = await responce.json();
//   users = JSON.stringify(users);
  // data fetch ho jane k baad dispatch function call hota hai aur ye userReducer ko object(action) pass karta hai
  // waha se state change phir data store me jata hai store se provider aur phir component me connect k through
  dispatch({
    type:"success_users",
    payload: users
  })
}