import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../styles/register.css';

const Register = () => {
    function handleSubmit() {
        const role = document.querySelector('input[name="role"]:checked')?.value;
        const full_name = document.querySelector("#full_name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const phone = document.querySelector("#phone").value;


        if (!role || !full_name || !email || !password || !phone) {
            return Swal.fire("Error", "Please fill in all the required fields.", "error");
        } else { console.log(role, full_name, email, password, phone); }

        axios.post("http://localhost:1337/api/register", {
            role,
            full_name,
            email,
            password,
            phone
        }).then((res) => {
            console.log(res);
            return Swal.fire("Success", "Your account has been created successfully!", "success")
            .then(()=>{
                window.location.href = "/login";
            });
            

        }).catch((err) => {
            console.error(err);
            return Swal.fire("Error", err.response?.data?.message || "An error occurred while creating your account. Please try again.", "error");
        })
    }
    return (
        <div className="register-page">
            <div className="register-visual">
                <div className="register-visual-content">
                    <h2>Join Idea2Team</h2>
                    <p>Create your account and start building or finding opportunities on the best freelancer platform.</p>
                    <div className="register-visual-graphic">💡</div>
                </div>
            </div>

            <div className="register-form-container">
                <div className="register-form">
                    <div className="register-form-header">
                        <Link to="/" className="register-header-link">
                            <span className="register-header-logo-icon">I2</span>
                            <span className="register-header-logo-text">Idea2Team</span>
                        </Link>
                        <h1>Create Account</h1>
                        <p>Choose your role and get started in minutes</p>
                    </div>

                    {/* Role Selector */}
                    <div className="role-selector">
                        <label className="role-option">
                            <input type="radio" name="role" value="founder" defaultChecked />
                            <div className="role-option-icon">🏢</div>
                            <div className="role-option-label">I'm a Founder</div>
                            <p className="register-role-desc">Post projects & hire talent</p>
                        </label>
                        <label className="role-option">
                            <input type="radio" name="role" value="freelancer" />
                            <div className="role-option-icon">💻</div>
                            <div className="role-option-label">I'm a Freelancer</div>
                            <p className="register-role-desc">Find projects & earn money</p>
                        </label>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input id="full_name" type="text" className="form-input" placeholder="Enter your full name" />
                        </div>

                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input id="email" type="email" className="form-input" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input id="password" type="password" className="form-input" placeholder="Create a strong password" />
                        <p className="form-helper">Must be at least 8 characters with a number and special character</p>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input id="phone" type="tel" className="form-input" placeholder="Enter your phone number" />
                    </div>
                    <div className="register-terms">
                        <label className="register-terms-label">
                            <input type="checkbox" className="register-terms-checkbox" />
                            I agree to the <a href="#terms" className="register-terms-link">Terms of Service</a> and <a href="#privacy" className="register-terms-link">Privacy Policy</a>
                        </label>
                    </div>
                    <button className="register-btn register-btn-primary" onClick={handleSubmit}>Create Account</button>

                    <div className="register-divider">or</div>

                    <button className="register-btn register-btn-secondary register-mb-8">
                        🔵 Sign up with Google
                    </button>

                    <p className="register-footer">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
