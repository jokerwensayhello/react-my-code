import { combineReducers } from "redux";
import details from "./details";
import list from "./list";
import user from "./user";

let reducer;
export default reducer = combineReducers({
    list,
    user,
    details
})