import { configureStore } from "@reduxjs/toolkit";


const appStore=configureStore({
    reducer: rootRedcuer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
})

export default appStore;