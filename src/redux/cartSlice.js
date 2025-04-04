import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCaItems : (state, action) => {
            const item = action.payload;
            const product =state.cartItems.find((x) => x.id === item.id);
            if (!!product) {
                const cartItems = state.cartItems.map((x) =>
                    x.id === product.id ? item : x
                );
                state.cartItems = cartItems;
            }
            else {
                state.cartItems = [...state.cartItems, item];
            }
        },
        removeCarItems: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (x) => x.id !== action.payload
            );
        }
    },
});

export const selectCartItems = (state) => state.cart.cartItems;

export const { addCartItems, removeCarItems } = cartSlice.actions;

export default cartSlice.reducer;