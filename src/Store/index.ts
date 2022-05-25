import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import usersReducers from "./features/usersReducers";


export const store = configureStore({
     reducer:{
        users: usersReducers
     },
})

export type RootState = ReturnType<typeof store.getState>