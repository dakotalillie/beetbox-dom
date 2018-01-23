import React from 'react';
import './Sidebar.css';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarBrowser from './SidebarBrowser/SidebarBrowser';
import SidebarFooter from './SidebarFooter/SidebarFooter';

const Sidebar = ({
  currentUser,
  folders,
  libraries,
  filters,
  changeCategory
}) => {
  return (
    <div className="sidebar">
      <SidebarHeader currentUser={currentUser} />
      <SidebarBrowser
        folders={folders}
        libraries={libraries}
        filters={filters}
        changeCategory={changeCategory}
      />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
