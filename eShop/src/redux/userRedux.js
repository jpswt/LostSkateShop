import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { publicRequest, userRequest } from '../request';

const initialState = {
	token: sessionStorage.getItem('token'),
	currentUser: null,
	isFetching: false,
	error: false,
};

export const registerUser = createAsyncThunk(
	'user/registerUser',
	async (user) => {
		try {
			const token = await publicRequest.post('/auth/register', user);
			sessionStorage.setItem('token', token.data);
			return token.data;
		} catch (error) {
			console.log(error.response.data);
		}
	}
);

export const loginUser = createAsyncThunk('user/loginUser', async (user) => {
	try {
		const token = await publicRequest.post(`/auth/login`, user);
		sessionStorage.setItem('token', token.data);
		return token.data;
	} catch (error) {
		console.log(error.response.data);
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loadUser(state, action) {
			const token = state.token;
			if (token) {
				const user = jwtDecode(token);
				return {
					...state,
					token,
					currentUser: user,
					isFetching: false,
				};
			}
		},
		logoutUser(state, action) {
			sessionStorage.removeItem('token');
			return {
				...state,
				currentUser: null,
				isFetching: false,
				error: false,
			};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registerUser.pending, (state, action) => {
			return { ...state, isFetching: true, error: false };
		});
		builder.addCase(registerUser.fulfilled, (state, action) => {
			if (action.payload) {
				const user = jwtDecode(action.payload);
				return {
					...state,
					token: '',
					isFetching: false,
					token: action.payload,
					currentUser: user,
				};
			} else return state;
		});
		builder.addCase(registerUser.rejected, (state, action) => {
			return { ...state, isFetching: false, error: true };
		});

		builder.addCase(loginUser.pending, (state, action) => {
			return { ...state, isFetching: true, error: false };
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			if (action.payload) {
				const user = jwtDecode(action.payload);
				return {
					...state,
					token: '',
					isFetching: false,
					token: action.payload,
					currentUser: user,
				};
			} else
				return {
					state,
					error: true,
				};
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			return { ...state, isFetching: true, error: true };
		});
	},
});

export const { loadUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
