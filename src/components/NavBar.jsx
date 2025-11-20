import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegistrationModal from './RegistrationModal';
import './styles/NavBar.css';

function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRegistration = (formData) => {
    console.log('User registered:', formData);
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  return (
    <>
      <nav>
        <div>
          <Link to='/' className="logo">🖊 Search</Link>
        </div>
        {!isLoggedIn ? (
          <button onClick={handleOpenModal}>Start now</button>
        ) : (
          <div className="user-icon">👤</div>
        )}
      </nav>
      <RegistrationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleRegistration}
      />
    </>
  );
}

export default NavBar;