import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const history = useHistory();

    const slides = [
        {
            id: 1,
            image: 'path/to/your/first-image.jpg', // Replace with your actual image path
            text: 'Welcome to Daily3! Discover and accomplish your daily activities.',
        },
        {
            id: 2,
            image: 'path/to/your/second-image.jpg', // Replace with your actual image path
            text: 'Get started with Daily3 today!',
        },
    ];

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handleSignupRedirect = () => {
        localStorage.setItem('hasSeenLandingPage', 'true');
        history.push('/signup');
    };

    return (
        <div className="landing-page">
            <div className="slider">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${index === slideIndex ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={`Slide ${slide.id}`} />
                        <div className="text">{slide.text}</div>
                    </div>
                ))}
            </div>
            {slideIndex === slides.length - 1 && (
                <button className="signup-button" onClick={handleSignupRedirect}>
                    Sign Up
                </button>
            )}
            <button className="next-slide-button" onClick={nextSlide}>
                Next
            </button>
        </div>
    );
};

export default LandingPage;
