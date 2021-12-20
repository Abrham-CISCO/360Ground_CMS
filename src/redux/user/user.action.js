import { UserActionTypes } from "./user.types";
export const setCurrentUser = (user)=> ({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
})

export const addNewUser = (user)=> ({
    type:UserActionTypes.ADD_NEW_USER,
    payload:user
})

export const editUser = (user, id)=> ({
    type:UserActionTypes.EDIT_USER,
    payload:{user,id}
})

export const removeUser = (id) => ({
    type:UserActionTypes.REMOVE_USER,
    payload:{id}
})