import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import './FilterArea.css';
import SearchBar from './SearchBar/SearchBar';
import FilterButtons from './FilterButtons/FilterButtons';
import TagsArea from './TagsArea/TagsArea';

const FilterArea = ({
  tags,
  filters,
  displayedSamples,
  samples,
  setSampleSearch,
  changeTags,
  changeSampleType,
  changeInstrument
}) => {
  return (
    <div className="filter_area">
      <Grid>
        <Row className="first_row">
          <SearchBar setSampleSearch={setSampleSearch} />
        </Row>
        <Row>
          <FilterButtons
            filters={filters}
            samples={samples}
            changeSampleType={changeSampleType}
            displayedSamples={displayedSamples}
            changeInstrument={changeInstrument}
          />
        </Row>
        <Row>
          <TagsArea
            tags={tags}
            filters={filters}
            displayedSamples={displayedSamples}
            changeTags={changeTags}
          />
        </Row>
      </Grid>
    </div>
  );
};

export default FilterArea;
