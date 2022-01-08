const redux  = require("redux")
const thunkMIddleware  = require("redux-thunk").default
const axios= require("axios")
const createStore =  reduc.createStore
const applyMiddleware  = redux.applyMiddleware

const initialState = {
    loading :false,
    users : [],
    error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest =()=>{
    return {
        type : FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess=()=>{
    return {
        type : FETCH_USERS_SUCCESS
    }
}
const fetchUsersFailure=()=>{
    return {
        type :FETCH_USERS_FAILURE
    }
}
const fetchUsers =(state = initialState , action)=>{

}

const fetchUsers =  ()=>{

return function(dispatch){
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        const users = response.data.map(user=>user.id)

    })
}

}