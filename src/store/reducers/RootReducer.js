import reducer from "./Reducer";
import authReducer from "./AuthReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    reducer , authReducer
})
export default rootReducer;