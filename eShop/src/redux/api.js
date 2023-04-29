import { publicRequest } from '../request';
import { loginFail, loginStart, loginSuccess, logOut } from './userReduxOld';

export const register = async (dispatch, user) => {
	dispatch;
};

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const response = await publicRequest.post('/auth/login', user);
		dispatch(loginSuccess(response.data));
		localStorage.setItem('token', response.data);
	} catch (err) {
		dispatch(loginFail());
	}
};

export const logout = async (dispatch, user) => {
	dispatch(logOut());
	try {
		localStorage.removeItem('token');
	} catch (err) {}
};
