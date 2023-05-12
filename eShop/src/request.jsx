import axios from 'axios';

const BASE_URL = import.meta.env.VITE_DB_URI;
const TOKEN = localStorage?.getItem('token');
// console.log(TOKEN);

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
// console.log('here is the token', TOKEN);

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
});
