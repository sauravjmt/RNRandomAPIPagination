import { combineReducers } from "redux";
import randomUserReducer from "./RandomUserReducer";


const rootReducer=combineReducers({
    user:randomUserReducer
})


export default rootReducer