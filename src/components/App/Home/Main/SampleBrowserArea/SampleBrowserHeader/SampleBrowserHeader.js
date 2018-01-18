import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import './SampleBrowserHeader.css';

const SampleBrowserHeader = ({
  count,
  downloadSamples,
  selectedSamples,
  toggleAllSamplesSelect,
  displayedSamples,
  deleteSamples,
  toggleEditSampleModal
}) => {
  return (
    <div className="sample_browser_header">
      <Grid className="sample_browser_header_container">
        <Row>
          <Col xs={4}>
            <div className="left_buttons">
              <Button
                className="select_all_button"
                onClick={() => {
                  return toggleAllSamplesSelect(
                    displayedSamples.map(sample => sample.id)
                  );
                }}
              >
                {selectedSamples.length ? 'Deselect All' : 'Select All'}
              </Button>
              <div className="horizontal_divider" />
              <Button
                onClick={() => {
                  return selectedSamples.length
                    ? downloadSamples(selectedSamples)
                    : null;
                }}
              >
                Download
              </Button>
            </div>
          </Col>
          <Col xs={4}>
            <div className="result_count_display">{count} Results</div>
          </Col>
          <Col xs={4}>
            <div className="right_buttons">
              <Button
                className="select_all_button"
                onClick={() =>
                  selectedSamples.length ? toggleEditSampleModal() : null
                }
              >
                Edit
              </Button>
              <div className="horizontal_divider" />
              <Button
                onClick={() => {
                  if (selectedSamples.length) {
                    deleteSamples(selectedSamples.map(sample => sample.id));
                  }
                }}
              >
                Delete
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SampleBrowserHeader;
