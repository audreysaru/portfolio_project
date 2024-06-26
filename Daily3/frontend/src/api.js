import axios from 'axios';

const API_URL = 'https://your-backend-app-name.herokuapp.com/api';

export const signup = (userData) => axios.post(`${API_URL}/signup`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const getProfile = () => axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});
export const updateProfile = (userData) => axios.put(`${API_URL}/profile`, userData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});
export const addActivityHistory = (activity) => axios.post(`${API_URL}/activities`, { activity }, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});
