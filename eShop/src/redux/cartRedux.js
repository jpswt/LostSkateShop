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
				(item) => item._id !== action.payload
			);
			state.quantity -= 1;
		},
		increaseCart: (state, action) => {
			const item = state.products.find(
				(item) => item._id === action.payload._id
			);
			item.quantity += action.payload.quantity;
		},

		decreaseCart: (state, action) => {
			const item = state.products.find(
				(item) => item._id === action.payload._id
			);

			if (item.quantity > 1) {
				item.quantity -= action.payload.quantity;
			} else if (item.quantity === 0) {
				state.products = state.products.filter(
					(element) => element._id !== action.payload._id
				);
			}
		},
		resetCart: (state) => {
			state.products = [];
		},
	},
});

export const {
	addProduct,
	removeProduct,
	increaseCart,
	decreaseCart,
	resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
