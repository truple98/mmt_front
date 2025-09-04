import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

import { BsLayoutSidebar } from "react-icons/bs";
import './Layout.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`app-layout ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <header className="header">
        <div className="header-left">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <BsLayoutSidebar size={20} />
          </button>
        </div> 
        <Header />
      </header>

      <main className="content"><Outlet /></main>
      <aside className="sidebar-overlay">
        <Sidebar />
      </aside>
    </div>
  );
};

export default Layout;