import ModuleActionTypes from "./modules.types";
const INITIAL_STATE = {
    modules:[]
}
export default function modulesReducer(state=INITIAL_STATE, action){
    let tempState;
    switch(action.payload){
        case ModuleActionTypes.ADD_NEW_MODULE:
            return {
                ...state, modules:[...state.modules, action.payload]
            }
        case ModuleActionTypes.REMOVE_MODULE:
            tempState = state
            tempState = tempState.modules.filter(module=>module.id!=action.payload.id)
            return{
                ...state, modules:[...tempState]                
            }
        case ModuleActionTypes.EDIT_MODULE:
            tempState = state;
            tempState.modules.forEach(module=>{
                if(module.id == action.payload.id) module=action.payload.module;
            })
            return{
                ...state, modules:[...tempState.modules]
            }
        default:
            return state;
    }
}