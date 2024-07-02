import React, { useState } from 'react';
import { signup } from '../api';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', username: '', email: '', password: '', birthday: '', profilePicture: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData);
            alert('Signup successful');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <input type="date" name="birthday" placeholder="Birthday" onChange={handleChange} />
            <input type="text" name="profilePicture" placeholder="Profile Picture URL" onChange={handleChange} />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;