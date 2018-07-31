import { combineReducers } from "redux";
import details from "./details";
import list from "./list";
import user from "./user";


let reducer = combineReducers({
    list,
    user,
    details
});
export default reducer;