import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';

const FilterArea = () => {
  return (
    <div className="filter_area">
      <Grid>
        <Row>
          <SearchBar />
        </Row>
      </Grid>
    </div>
  );
};

export default FilterArea;
