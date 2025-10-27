import React, { useState } from 'react';
import './styles/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log('Google sign-in clicked');
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__card">
          {/* Header */}
          <div className="signup__header">
            <h3 className="signup__title">Sign Up</h3>
            <p className="signup__subtitle">
              Create notes in minutes. No credit card required.
            </p>
          </div>

          {/* Body */}
          <div className="signup__body">
            {/* Google Sign In */}
            <div className="signup__google" onClick={handleGoogleSignIn}>
              <img
                src="/_next/static/media/google.38d39ae4.svg"
                alt="Google"
                loading="lazy"
                width="17"
                height="17"
                className="signup__google-icon"
              />
              <h2 className="signup__google-text">Continue with Google</h2>
            </div>

            {/* Divider */}
            <div className="signup__divider">
              <div className="signup__divider-line"></div>
              <div className="signup__divider-text">
                <span className="signup__divider-span">OR</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="signup__form">
              <div className="signup__form-grid">
                {/* First and Last Name Row */}
                <div className="signup__name-row">
                  <div className="signup__field">
                    <label htmlFor="first-name" className="signup__label">
                      First name
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder="Sarthak"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="signup__input"
                    />
                  </div>
                  <div className="signup__field">
                    <label htmlFor="last-name" className="signup__label">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder="Dhawan"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="signup__input"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="signup__field">
                  <label htmlFor="email" className="signup__label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="sarthak@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="signup__input"
                  />
                </div>

                {/* Password */}
                <div className="signup__field">
                  <label htmlFor="password" className="signup__label">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="signup__input"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="signup__submit">
                  Create an account
                </button>

                {/* Error Message */}
                {error && <h5 className="signup__error">{error}</h5>}
              </div>

              {/* Sign In Link */}
              <div className="signup__signin-link">
                Already have an account?{' '}
                <a href="/login" className="signup__link">
                  Sign in
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Terms */}
        <div className="signup__terms">
          By creating or entering an account, you agree to the{' '}
          <a href="/terms-of-service" className="signup__terms-link">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy-policy" className="signup__terms-link">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;