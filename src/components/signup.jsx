import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google sign-in clicked");
  };

  return (
    <>
      <style>{`
/* SignUp Component Styles */
.signup {
  background: #080F15;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.signup__container {
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
}

/* Card */
.signup__card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Header */
.signup__header {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
  padding-bottom: 0;
}

.signup__title {
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  color: #F9FAFB;
  margin: 0;
}

.signup__subtitle {
  font-size: 0.875rem;
  color: #cccad1;
  margin: 0;
}

/* Body */
.signup__body {
  padding: 1.5rem;
  padding-top: 1rem;
}

/* Google Sign In Button */
.signup__google {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  padding: 0.75rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  transition: background-color 0.2s ease;
}

.signup__google:hover {
  background: rgba(255, 255, 255, 0.15);
}

.signup__google-icon {
  margin-right: 0.75rem;
  width: 17px;
  height: 17px;
}

.signup__google-text {
  font-size: 1rem;
  font-weight: 500;
  color: #cccad1;
  margin: 0;
}

/* Divider */
.signup__divider {
  position: relative;
  margin: 0.75rem 0;
}

.signup__divider-line {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
}

.signup__divider-line::before {
  content: '';
  width: 100%;
  border-top: 1px solid #9ca3af;
}

.signup__divider-text {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 1.125rem;
}

.signup__divider-span {
  padding: 0 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: #cccad1;
}

/* Form */
.signup__form {
  margin-top: 1rem;
}

.signup__form-grid {
  display: grid;
  gap: 1rem;
}

/* Name Row */
.signup__name-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* Field */
.signup__field {
  display: grid;
  gap: 0.5rem;
}

.signup__label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #cccad1;
  line-height: 1;
}

.signup__input {
  display: flex;
  height: 2.5rem;
  width: 100%;
  padding: 0.5rem 0.75rem;
  color: #F9FAFB;
  font-size: 0.875rem;
  border: none;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
}

.signup__input::placeholder {
  color: #9ca3af;
}

.signup__input:focus {
  outline: none;
  box-shadow: 0 0 0 1px #a855f7;
}

.signup__input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Submit Button */
.signup__submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 2.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  background: rgba(168, 85, 247, 0.8);
  border-radius: 0.75rem;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
}

.signup__submit:hover {
  background: rgba(147, 51, 234, 0.9);
}

.signup__submit:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.5);
}

.signup__submit:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Error Message */
.signup__error {
  color: #f87171;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
}

/* Sign In Link */
.signup__signin-link {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1.125rem;
  color: #cccad1;
}

.signup__link {
  text-decoration: underline;
  color: #cccad1;
  transition: color 0.2s ease;
}

.signup__link:hover {
  color: #ffffff;
}

/* Terms */
.signup__terms {
  font-weight: 300;
  font-size: 0.875rem;
  color: #cccad1;
  margin-top: 1.5rem;
  text-align: center;
}

.signup__terms-link {
  color: #c084fc;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;
}

.signup__terms-link:hover {
  color: #e9d5ff;
}

/* Tablet Styles */
@media (min-width: 640px) {
  .signup {
    padding: 1.5rem;
  }
}

/* Desktop Styles */
@media (min-width: 768px) {
  .signup__header {
    padding: 1.5rem;
    padding-bottom: 0;
  }

  .signup__body {
    padding: 1.5rem;
    padding-top: 1rem;
  }
}

/* Focus States for Accessibility */
.signup__google:focus {
  outline: 2px solid #c084fc;
  outline-offset: 2px;
}

.signup__google:focus:not(:focus-visible) {
  outline: none;
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .signup__google,
  .signup__input,
  .signup__submit,
  .signup__link,
  .signup__terms-link {
    transition: none;
  }
}
`}</style>
      <div className='signup'>
        <div className='signup__container'>
          <div className='signup__card'>
            {/* Header */}
            <div className='signup__header'>
              <h3 className='signup__title'>Sign Up</h3>
              <p className='signup__subtitle'>
                Create notes in minutes. No credit card required.
              </p>
            </div>

            {/* Body */}
            <div className='signup__body'>
              {/* Google Sign In */}
              <div className='signup__google' onClick={handleGoogleSignIn}>
                <img
                  src='/_next/static/media/google.38d39ae4.svg'
                  alt='Google'
                  loading='lazy'
                  width='17'
                  height='17'
                  className='signup__google-icon'
                />
                <h2 className='signup__google-text'>Continue with Google</h2>
              </div>

              {/* Divider */}
              <div className='signup__divider'>
                <div className='signup__divider-line'></div>
                <div className='signup__divider-text'>
                  <span className='signup__divider-span'>OR</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className='signup__form'>
                <div className='signup__form-grid'>
                  {/* First and Last Name Row */}
                  <div className='signup__name-row'>
                    <div className='signup__field'>
                      <label htmlFor='first-name' className='signup__label'>
                        First name
                      </label>
                      <input
                        id='first-name'
                        name='firstName'
                        type='text'
                        placeholder='Sarthak'
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className='signup__input'
                      />
                    </div>
                    <div className='signup__field'>
                      <label htmlFor='last-name' className='signup__label'>
                        Last name
                      </label>
                      <input
                        id='last-name'
                        name='lastName'
                        type='text'
                        placeholder='Dhawan'
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className='signup__input'
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className='signup__field'>
                    <label htmlFor='email' className='signup__label'>
                      Email
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='sarthak@example.com'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className='signup__input'
                    />
                  </div>

                  {/* Password */}
                  <div className='signup__field'>
                    <label htmlFor='password' className='signup__label'>
                      Password
                    </label>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className='signup__input'
                    />
                  </div>

                  {/* Submit Button */}
                  <button type='submit' className='signup__submit'>
                    Create an account
                  </button>

                  {/* Error Message */}
                  {error && <h5 className='signup__error'>{error}</h5>}
                </div>

                {/* Sign In Link */}
                <div className='signup__signin-link'>
                  Already have an account?{" "}
                  <a href='/login' className='signup__link'>
                    Sign in
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Terms */}
          <div className='signup__terms'>
            By creating or entering an account, you agree to the{" "}
            <a href='/terms-of-service' className='signup__terms-link'>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href='/privacy-policy' className='signup__terms-link'>
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
