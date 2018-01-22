import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './Main.css';
import HamburgerIcon from '../../../../containers/HamburgerIcon';
import Header from './Header/Header';
import FilterArea from '../../../../containers/FilterArea';
import SampleBrowserArea from '../../../../containers/SampleBrowserArea';

const Main = ({ sidebarOpen, rightSidebarOpen, addSamples }) => {
  function contentClass() {
    if (
      (sidebarOpen && rightSidebarOpen) ||
      (!sidebarOpen && !rightSidebarOpen)
    ) {
      return 'content';
    } else if (sidebarOpen && !rightSidebarOpen) {
      return 'content pushed';
    } else if (!sidebarOpen && rightSidebarOpen) {
      return 'content pushed_left';
    }
  }
  return (
    <div className="main">
      <HamburgerIcon />
      <Grid className="main_grid">
        <div className={contentClass()}>
          <Row className="header_row">
            <Header addSamples={addSamples} />
          </Row>
          <Row className="filter_row">
            <FilterArea />
          </Row>
          <Row>
            <SampleBrowserArea />
          </Row>
        </div>
      </Grid>
    </div>
  );
};

export default Main;
