import React, { useState, useEffect } from 'react';
import { getProfile, updateProfile } from '../api';
import './Profile.css';

const Profile = () => {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', username: '', email: '', password: '', birthday: '', profilePicture: ''
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await getProfile();
                setFormData(data);
            } catch (err) {
                alert(err.message);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(formData);
            alert('Profile updated successfully');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <input type="date" name="birthday" placeholder="Birthday" value={formData.birthday} onChange={handleChange} />
            <input type="text" name="profilePicture" placeholder="Profile Picture URL" value={formData.profilePicture} onChange={handleChange} />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default Profile;
