import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		token: localStorage.getItem('token'),
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginFail: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logOut: (state) => {
			token = localStorage.getItem('token');
			state.currentUser = null;
			state.isFetching = false;
			state.error = false;
		},
	},
});

export const { loginStart, loginSuccess, loginFail, logOut } =
	userSlice.actions;
export default userSlice.reducer;
