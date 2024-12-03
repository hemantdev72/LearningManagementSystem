import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../feature/authSlice.js'; 
import { authApi } from "../feature/api/authApi.js";

const rootRedcuer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer, 
});
export default rootRedcuer;