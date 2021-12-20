import { TraineeActionTypes } from "./trainee.types";
export const addNewTrainee = newTrainee => ({
    type:TraineeActionTypes.ADD_NEW_TRAINEE,
    payload:newTrainee
})

export const removeTrainee = id => ({
    type:TraineeActionTypes.REMOVE_TRAINEE,
    payload:{id}
})

export const editTrainee = (id, trainee) => ({
    type:TraineeActionTypes.EDIT_TRAINEE,
    payload:{id,trainee}
})