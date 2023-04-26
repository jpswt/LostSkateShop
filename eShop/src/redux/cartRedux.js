import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			const item = state.products.find(
				(item) => item._id === action.payload._id
			);
			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.products.push(action.payload);
				state.quantity += 1;
			}
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(
				(element) => element._id !== action.payload
			);
			state.quantity -= 1;
		},
		resetCart: (state) => {
			state.products = [];
		},
	},
});

export const { addProduct, removeProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
