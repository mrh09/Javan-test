import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems';

const initialState = {
    cartItems: cartItems,
    qty: 0,
    temporaryAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
            console.log(itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.qty = cartItem.qty + 1;
            console.log(cartItem);
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.qty = cartItem.qty - 1;
            console.log(cartItem);
        },
        calculateTotals: (state) => {
            let qty = 0;
            let temporaryAmount = 0;
            state.cartItems.forEach((item) => {
                qty += item.qty;
                temporaryAmount += item.qty * item.price
            })
            state.qty = qty;
            state.temporaryAmount = temporaryAmount;
        },
    }
});

console.log(cartSlice);

export const { removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;