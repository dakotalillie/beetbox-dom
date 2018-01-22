import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './TagList.css';

const TagList = () => {
  return (
    <div className="tag_list">
      <Grid>
        <Row>
          <Col xs={6}>
            <div className="node_label pretty p-default p-curve p-thick p-smooth">
              <input type="checkbox" />
              <div className="state">
                <label>
                  Acoustic<span className="tag_count">17</span>
                </label>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="node_label pretty p-default p-curve p-thick p-smooth">
              <input type="checkbox" />
              <div className="state">
                <label>
                  Ambient<span className="tag_count">5</span>
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="node_label pretty p-default p-curve p-thick p-smooth">
              <input type="checkbox" />
              <div className="state">
                <label>
                  Dark<span className="tag_count">10</span>
                </label>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="node_label pretty p-default p-curve p-thick p-smooth">
              <input type="checkbox" />
              <div className="state">
                <label>
                  Distorted<span className="tag_count">23</span>
                </label>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="node_label pretty p-default p-curve p-thick p-smooth">
              <input type="checkbox" />
              <div className="state">
                <label>
                  Electronic<span className="tag_count">8</span>
                </label>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="node_label pretty p-default p-curve p-thick p-smooth">
              <input type="checkbox" />
              <div className="state">
                <label>
                  Rare<span className="tag_count">2</span>
                </label>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default TagList;
