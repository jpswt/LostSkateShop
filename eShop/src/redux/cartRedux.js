import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: localStorage.getItem('products')
			? JSON.parse(localStorage.getItem('products'))
			: [],
		quantity: localStorage.getItem('quantity')
			? JSON.parse(localStorage.getItem('quantity'))
			: null,
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
			localStorage.setItem('quantity', JSON.stringify(state.quantity));
		},
		removeProduct: (state, action) => {
			state.products = state.products.filter(
				(item) => item._id !== action.payload
			);
			if (state.products.length > 1) {
				state.quantity -= 1;
			} else {
				state.quantity = 0;
			}
			localStorage.setItem('products', JSON.stringify(state.products));
			localStorage.setItem('quantity', JSON.stringify(state.quantity));
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
			state.quantity = 0;
			localStorage.removeItem('products');
			localStorage.removeItem('quantity');
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
