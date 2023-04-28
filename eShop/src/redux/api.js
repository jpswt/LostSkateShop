import { publicRequest } from '../request';
import { loginFail, loginStart, loginSuccess } from './userRedux';

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const response = await publicRequest.post('/auth/login', user);
		localStorage.setItem('token', JSON.stringify(response.data));
		dispatch(loginSuccess(response.data));
	} catch (err) {
		dispatch(loginFail());
	}
};
