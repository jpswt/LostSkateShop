import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: localStorage.getItem('products')
			? JSON.parse(localStorage.getItem('products'))
			: [],
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
			localStorage.setItem('products', JSON.stringify(state.products));
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(
				(item) => item._id !== action.payload
			);
			state.quantity -= 1;
			localStorage.setItem('products', JSON.stringify(state.products));
		},
		increaseCart: (state, action) => {
			const item = state.products.find(
				(item) => item._id === action.payload._id
			);
			item.quantity += action.payload.quantity;
			localStorage.setItem('products', JSON.stringify(state.products));
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
			localStorage.setItem('products', JSON.stringify(state.products));
		},
		resetCart: (state) => {
			state.products = [];
			localStorage.setItem('products', JSON.stringify(state.products));
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
