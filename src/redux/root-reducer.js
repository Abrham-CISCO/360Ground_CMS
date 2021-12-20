import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import traineeReducer from "./trainee/trainee.reducer";

export default combineReducers({
    user:userReducer,
    trainee:traineeReducer
})