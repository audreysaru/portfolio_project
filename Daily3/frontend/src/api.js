import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use(req => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = localStorage.getItem('token');
    }
    return req;
});

export const signup = (formData) => API.post('/users/signup', formData);
export const login = (formData) => API.post('/users/login', formData);
export const getProfile = () => API.get('/users/profile');
export const updateProfile = (formData) => API.put('/users/profile', formData);
export const addActivityHistory = (activity) => API.post('/users/activity', { activity });