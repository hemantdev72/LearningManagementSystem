import { configureStore } from "@reduxjs/toolkit";
import rootRedcuer from "./rootReducer.js";
import { authApi } from "@/feature/api/authApi";


const appStore=configureStore({
    reducer: rootRedcuer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
})

const initializeApp = async () => {
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();

export default appStore;