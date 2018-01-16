import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './Main.css';
import HamburgerIcon from '../../../../containers/HamburgerIcon';
import Header from './Header/Header';
import FilterArea from '../../../../containers/FilterArea';
import SampleBrowserArea from '../../../../containers/SampleBrowserArea';

const Main = ({ sidebarOpen, addSamples }) => {
  return (
    <div className="main">
      <HamburgerIcon />
      <Grid className="main_grid">
        <div className={'content' + (sidebarOpen ? ' pushed' : '')}>
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
