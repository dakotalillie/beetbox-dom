import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './FilterButtons.css';
import FilterButton from './FilterButton/FilterButton';

const FilterButtons = () => {
  return (
    <div className="filter_buttons">
      <Grid className="filter_buttons_container">
        <Row>
          <Col sm={2}>
            <FilterButton text="Type" />
          </Col>
          <Col sm={2}>
            <FilterButton text="Instrument" />
          </Col>
          <Col sm={2}>
            <FilterButton text="Tempo" />
          </Col>
          <Col sm={2}>
            <FilterButton text="Key" />
          </Col>
          <Col sm={2}>
            <FilterButton text="Genre" />
          </Col>
          <Col sm={2}>
            <FilterButton text="Rating" />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default FilterButtons;
