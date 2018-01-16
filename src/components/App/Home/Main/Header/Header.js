import React from 'react';
import {
  Button,
  ButtonToolbar,
  Glyphicon,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import './Header.css';

const Header = ({ addSamples }) => {
  let input;
  return (
    <div className="header">
      <Grid>
        <Row className="no_margin">
          <Col sm={6}>
            <h1 className="header_title">All Samples</h1>
            <Button className="toggle_filter_area_button">
              <Glyphicon
                glyph="triangle-bottom"
                className="toggle_filter_area_glyph"
              />
            </Button>
          </Col>
          <Col sm={6} className="pull_right_col">
            <ButtonToolbar className="header_buttons">
              <Button
                bsSize="large"
                className="upload_button"
                onClick={() => input.click()}
              >
                Upload
              </Button>
              <input
                type="file"
                name="fullres_files[]"
                multiple
                className="hidden_file_upload"
                ref={node => {
                  input = node;
                }}
                accept="audio/*"
                onChange={e => uploadFiles(e.target.files, addSamples)}
              />
              <Button
                bsStyle="primary"
                bsSize="large"
                className="reset_filters_button"
              >
                Reset Filters
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Header;

// helpers

const uploadFiles = (files, addSamples) => {
  if (files.length > 0) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`sample[fullres_file][${i}]`, files[i], files[i].name);
    }
    for (let value of formData.values()) {
      console.log(value);
    }
    addSamples(formData);
  }
};

// const uploadFiles = (files, addSamples) => {
//   const reader = new FileReader();
//   reader.onloadend = function() {
//     addSamples({
//       sample: {
//         name: files[0].name,
//         contents: reader.result
//       }
//     });
//   };
//   reader.readAsDataURL(files[0]);
// };
