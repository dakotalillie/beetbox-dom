import React from 'react';
import './HamburgerIcon.css';
import { Button, Glyphicon } from 'react-bootstrap';

const HamburgerIcon = () => {
  return (
    <div className="hamburger_icon">
      <Button bsSize="large" className="hamburger_icon_button">
        <Glyphicon glyph="menu-hamburger" className="hamburger_icon_glyph" />
      </Button>
    </div>
  );
};

export default HamburgerIcon;
