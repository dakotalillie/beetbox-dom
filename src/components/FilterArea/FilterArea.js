import React from 'react';
import { Row } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';

const FilterArea = () => {
  return (
    <div className="filter_area">
      <Row>
        <SearchBar />
      </Row>
      <Row>
        <h1>testing</h1>
      </Row>
    </div>
  );
};

export default FilterArea;
