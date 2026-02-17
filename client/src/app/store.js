import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { loadAuthState, saveAuthState } from "../features/auth/persistAuth";

const preloadedState = { auth: loadAuthState() };

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState,
});

// Subscribe to save state changes
store.subscribe(() => {
    saveAuthState(store.getState().auth);
});
export default store;