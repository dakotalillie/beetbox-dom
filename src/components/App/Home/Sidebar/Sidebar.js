import React from 'react';
import './Sidebar.css';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarBrowser from './SidebarBrowser/SidebarBrowser';
import SidebarFooter from './SidebarFooter/SidebarFooter';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarBrowser />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
