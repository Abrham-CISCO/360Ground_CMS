import { TraineeActionTypes } from "./trainee.types"

const INITIAL_STATE = {
    trainees:[]
}

const traineeReducer = (state=INITIAL_STATE, action) => {
    let tempState = state;
    switch(action.type){
        case TraineeActionTypes.ADD_NEW_TRAINEE:
            return{
                ...state,trainees:[...state.trainees, action.payload]
            }
        case TraineeActionTypes.EDIT_TRAINEE:
            tempState.trainees.forEach(trainee=>{
                if(trainee.id==action.payload.id) trainee = action.payload.trainee;
            })
            return{
                ...tempState
            }
        case TraineeActionTypes.REMOVE_TRAINEE:
            tempState.trainees.filter(trainee=>trainee.id!==action.payload.id)
            return {
                ...tempState
            }
        default:
            return state;
    }
}

export default traineeReducer;