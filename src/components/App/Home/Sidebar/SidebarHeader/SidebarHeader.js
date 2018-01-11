import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './SidebarHeader.css';

const SidebarHeader = () => {
  return (
    <div className="sidebar_header">
      <Button bsSize="large" bsStyle="primary" className="logout_button">
        Log Out
      </Button>
      <h3 className="name">Dakota</h3>
      <Button className="notification_button">
        <Glyphicon glyph="bell" className="bell_glyph" />
      </Button>
      <hr className="header_hr" />
      <Button className="edit_account_button">Edit Account</Button>
    </div>
  );
};

export default SidebarHeader;
