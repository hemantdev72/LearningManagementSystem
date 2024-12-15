import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../feature/authSlice.js'; 
import { authApi } from "../feature/api/authApi.js";
import { courseApi } from "../feature/api/courseApi.js";
import { purchaseApi } from "@/feature/api/purchaseApi.js";

const rootRedcuer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer,
    [purchaseApi.reducerPath]:purchaseApi.reducer,
    auth:authReducer, 
});
export default rootRedcuer;