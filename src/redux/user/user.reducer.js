import {UserActionTypes} from './user.types'
const INITIAL_STATE = {
    currentUser:null,
    users:[]
}
const userReducer = (state= INITIAL_STATE, action) => {
    let tempState;
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, currentUser:action.payload
            }
        case UserActionTypes.ADD_NEW_USER:
            return{
                ...state, users:[...state.users, action.payload]
            }
        case UserActionTypes.EDIT_USER:
            tempState = state;
            tempState.users.forEach(user=>{if(user.id==action.payload.id)user=action.payload.user})
            return{
                ...state, users:[...tempState.users]
            }
        case UserActionTypes.REMOVE_USER:
            tempState = state;
            tempState = tempState.users.filter(user=>user.id!=action.payload.id)
            return{
                ...state, users:[...tempState]
            }
        default:
            return state;
    }
}

export default userReducer;