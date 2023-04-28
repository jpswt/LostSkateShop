import axios from 'axios';

const BASE_URL = import.meta.env.VITE_DB_URI;
const TOKEN = JSON.parse(localStorage.getItem('token')).accessToken;

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
