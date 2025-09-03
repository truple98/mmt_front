import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiEdit, FiBook } from 'react-icons/fi';
import { GiStairsGoal } from 'react-icons/gi';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const menuItems =[
    {
      path: '/diary',
      label: '일기 작성',
      icon: <FiEdit size={20} />
    },
    {
      path: '/journal',
      label: '일지 작성',
      icon: <FiBook size={20} />
    },
    {
      path: '/momentum',
      label: '모멘텀',
      icon: <GiStairsGoal size={20} />
    }
  ];

  return (
    <div className="sidebar-content">
      <div className="sidebar-header">
        <h2>Momentum</h2>
      </div>
    
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
