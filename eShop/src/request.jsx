import axios from 'axios';

const BASE_URL = import.meta.env.VITE_DB_URI;
const TOKEN = localStorage?.getItem('token');
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmY4ZGU5YWVkMzMwODk2MmE4MDAzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjMwOTk4MX0.q7jZdrtvvjtIaCkPDT3XJEjBLmxrNSUBTssNaFuUg-A';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
console.log('here is the token', TOKEN);

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
