import '../../styles/Navbar.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-brand">
                    <span className="brand-icon">I2</span>
                    Idea2Team
                </Link>

                <div className="navbar-links">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/freelancer/browse" className={isActive('/freelancer/browse')}>Browse Projects</Link>
                    <Link to="/founder/dashboard" className={isActive('/founder/dashboard')}>For Founders</Link>
                    <Link to="/freelancer/dashboard" className={isActive('/freelancer/dashboard')}>For Freelancers</Link>
                </div>

                <div className="navbar-actions">
                    <Link to="/login">
                        <button className="btn btn-ghost">Log In</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>

                <button className="navbar-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
                    <span></span>
                </button>
            </nav>

            <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link to="/freelancer/browse" onClick={() => setMobileOpen(false)}>Browse Projects</Link>
                <Link to="/founder/dashboard" onClick={() => setMobileOpen(false)}>For Founders</Link>
                <Link to="/freelancer/dashboard" onClick={() => setMobileOpen(false)}>For Freelancers</Link>
                <Link to="/login" onClick={() => setMobileOpen(false)}>Log In</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)}>Get Started</Link>
            </div>
        </>
    );
};

export default Navbar;
