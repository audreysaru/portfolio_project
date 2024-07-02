import axios from 'axios';

const API_URL = 'https://daily3-backend-014614ee701a.herokuapp.com/api';

export const signup = (userData) => axios.post(`${API_URL}/signup`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const getProfile = () => {
    const token = localStorage.getItem('token');
    return axios.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
export const updateProfile = (userData) => {
    const token = localStorage.getItem('token');
    return axios.put(`${API_URL}/profile`, userData, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
export const addActivityHistory = (activity) => {
    const token = localStorage.getItem('token');
    return axios.post(`${API_URL}/activities`, { activity }, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
