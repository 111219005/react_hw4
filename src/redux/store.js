import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const persistConfig = {
    key: 'shoppingCart',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
                // 如果用 redux-persist，需要忽略這些 action
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }
    ),
});

export default store;