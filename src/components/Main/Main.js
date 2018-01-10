import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './Main.css';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import Header from '../Header/Header';
import FilterArea from '../FilterArea/FilterArea';

const Main = () => {
  return (
    <div className="main">
      <HamburgerIcon />
      <Grid className="main_grid">
        <Row>
          <Header />
        </Row>
        <Row>
          <FilterArea />
        </Row>
      </Grid>
    </div>
  );
};

export default Main;
