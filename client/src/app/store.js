import { configureStore } from "@reduxjs/toolkit";
import rootRedcuer from "./rootReducer.js";
import { authApi } from "@/feature/api/authApi";
import { courseApi } from "@/feature/api/courseApi.js";
import { purchaseApi } from "@/feature/api/purchaseApi.js";


const appStore=configureStore({
    reducer: rootRedcuer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware,courseApi.middleware, purchaseApi.middleware)
})

const initializeApp = async () => {
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();

export default appStore;