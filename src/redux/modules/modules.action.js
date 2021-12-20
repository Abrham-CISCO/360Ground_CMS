
import {ModuleActionTypes} from './modules.types'
export const addNewModule = module => ({
    type:ModuleActionTypes.ADD_NEW_MODULE,
    payload:module
})
export const editModule = (module,id) => ({
    type:ModuleActionTypes.EDIT_MODULE,
    payload:{
        id,
        module
    }
})

export const removeModule = (id) => ({
    type:ModuleActionTypes.REMOVE_MODULE,
    payload:{id}
})
