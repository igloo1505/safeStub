import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/auth";
import UIReducer from "./slices/ui";
import NetworkReducer from "./slices/network";
import FormReducer from "./slices/form";
import AdminReducer from "./slices/admin";
import initialState from "./initial/initialState";
import storage from './local/storage'
import { persistReducer, persistStore } from "redux-persist"



const rootReducer = {
    auth: AuthReducer,
    UI: UIReducer,
    network: NetworkReducer,
    form: FormReducer,
    admin: AdminReducer,
}


const makeConfiguredStore = () => configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== "production" || true,
});

export const makeStore = (isServer = typeof window === "undefined"): ReturnType<typeof makeConfiguredStore> => {
    if (isServer) {
        return makeConfiguredStore();
    } else {
        // we need it only on client side
        const persistConfig = {
            key: "root",
            whitelist: ["form"], // make sure it does not clash with server keys
            storage,
        };
        const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));
        let store: any = configureStore({
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== "production",
            preloadedState: initialState
        });
        store.__persistor = persistStore(store); // Nasty hack
        return store;
    }
};

const store = makeStore(true)

declare global {
    interface Window {
        store: typeof store;
    }
}

if (process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
    window.store = store;
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
