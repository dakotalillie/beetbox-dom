import React from 'react';
import { Button, Glyphicon, Grid, Row } from 'react-bootstrap';
import './SidebarBrowser.css';

const SidebarBrowser = () => {
  return (
    <div className="sidebar_browser">
      <Grid>
        <Row>
          <Glyphicon glyph="asterisk" className="main_icon" />
          <Button className="title_button">All Samples</Button>
        </Row>
        <Row>
          <Glyphicon glyph="heart" className="main_icon" />
          <Button className="title_button">Favorites</Button>
        </Row>
        <Row>
          <Glyphicon glyph="music" className="main_icon" />
          <Button className="title_button">
            Libraries
            <Glyphicon glyph="triangle-right" />
          </Button>
        </Row>
        <Row>
          <Glyphicon glyph="folder-close" className="main_icon" />
          <Button className="title_button">
            Folders
            <Glyphicon glyph="triangle-right" />
          </Button>
        </Row>
      </Grid>
    </div>
  );
};

export default SidebarBrowser;
