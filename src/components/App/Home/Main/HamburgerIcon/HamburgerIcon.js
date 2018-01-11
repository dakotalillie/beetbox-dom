import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './HamburgerIcon.css';

const HamburgerIcon = ({ toggleSidebar }) => {
  return (
    <div className="hamburger_icon">
      <Button
        bsSize="large"
        className="hamburger_icon_button"
        onClick={toggleSidebar}
      >
        <Glyphicon glyph="menu-hamburger" className="hamburger_icon_glyph" />
      </Button>
    </div>
  );
};

export default HamburgerIcon;
