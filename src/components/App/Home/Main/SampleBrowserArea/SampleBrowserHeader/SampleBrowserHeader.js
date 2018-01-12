import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import './SampleBrowserHeader.css';

const SampleBrowserHeader = ({ count }) => {
  return (
    <div className="sample_browser_header">
      <Grid className="sample_browser_header_container">
        <Row>
          <Col xs={4}>
            <div className="left_buttons">
              <Button className="select_all_button">Select All</Button>
              <div className="horizontal_divider" />
              <Button>Download</Button>
            </div>
          </Col>
          <Col xs={4}>
            <div className="result_count_display">{count} Results</div>
          </Col>
          <Col xs={4}>
            <div className="right_buttons">
              <Button className="select_all_button">Edit</Button>
              <div className="horizontal_divider" />
              <Button>Delete</Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SampleBrowserHeader;
