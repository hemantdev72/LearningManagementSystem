import { configureStore } from "@reduxjs/toolkit";
import rootRedcuer from "./rootReducer.js";
import { authApi } from "@/feature/api/authApi";


const appStore=configureStore({
    reducer: rootRedcuer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
})

export default appStore;