import React from 'react';
import { Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header_title">All Samples</h1>
      <Button className="toggle_filter_area_button">
        <Glyphicon
          glyph="triangle-bottom"
          className="toggle_filter_area_glyph"
        />
      </Button>
      <ButtonToolbar className="header_buttons">
        <Button bsSize="large" className="upload_button">
          Upload
        </Button>
        <Button
          bsStyle="primary"
          bsSize="large"
          className="reset_filters_button"
        >
          Reset Filters
        </Button>
      </ButtonToolbar>
    </div>
  );
};

export default Header;
