import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiLogOut, FiUser } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login';
  };

  return (
    <header>
      <nav className="header-nav">
        <div className="user-info">
          {user && (
            <>
              <div className="user-profile">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="user-avatar" />
                ) : (
                  <FiUser className="user-icon" />
                )}
                <span className="user-name">{user.name}</span>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                <FiLogOut size={18} />
                로그아웃
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
export default Header;