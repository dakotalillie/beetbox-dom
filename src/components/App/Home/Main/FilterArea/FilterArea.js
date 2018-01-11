import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './FilterArea.css';
import SearchBar from './SearchBar/SearchBar';
import FilterButtons from './FilterButtons/FilterButtons';
import TagsArea from './TagsArea/TagsArea';

const FilterArea = () => {
  return (
    <div className="filter_area">
      <Grid>
        <Row className="first_row">
          <SearchBar />
        </Row>
        <Row>
          <FilterButtons />
        </Row>
        <Row>
          <TagsArea />
        </Row>
      </Grid>
    </div>
  );
};

export default FilterArea;
