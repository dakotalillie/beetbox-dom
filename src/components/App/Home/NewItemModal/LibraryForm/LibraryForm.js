import React from 'react';
import {
  Button,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Glyphicon,
  Grid,
  Image,
  Modal,
  Row
} from 'react-bootstrap';
import missingAlbumArt from '../../../../../assets/img/missing_albumart.jpg';
import './LibraryForm.css';

class LibraryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id ? props.id : null,
      name: props.name ? props.name : '',
      file: null,
      imagePreviewUrl: props.imagePreviewUrl ? props.imagePreviewUrl : null,
      deleteFile: false
    };
  }
  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
        deleteFile: false
      });
    };
    if (file) reader.readAsDataURL(file);
  };
  handleDeleteImage = e => {
    this.setState({ file: null, imagePreviewUrl: null, deleteFile: true });
  };
  submitForm = e => {
    e.preventDefault();
    if (!this.state.name) return;
    const formData = new FormData();
    formData.append('library[name]', this.state.name);
    if (this.state.file) {
      formData.append('library[file]', this.state.file, this.state.file.name);
    } else if (this.state.deleteFile) {
      formData.append('library[delete_file]', this.state.deleteFile);
    }
    if (this.state.id) formData.append('library[id]', this.state.id);
    if (!this.state.id) {
      this.props.addLibrary(formData);
    } else {
      this.props.editLibrary(formData, this.state.id);
    }
    this.props.close();
  };
  render() {
    return (
      <div className="library_form">
        <form ref={form => (this.form = form)} onSubmit={this.submitForm}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.id ? 'Edit Library' : 'New Library'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid>
              <Row>
                <Col xs={7}>
                  <FormGroup>
                    <ControlLabel>Library Name</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.name}
                      placeholder="My Library"
                      onChange={this.handleChange}
                      autoComplete="off"
                      bsSize="large"
                      autoFocus={true}
                    />
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup>
                    <ControlLabel className="artwork_label">
                      Artwork<Glyphicon
                        glyph="remove"
                        onClick={this.handleDeleteImage}
                      />
                    </ControlLabel>
                    <Button
                      bsSize="large"
                      block
                      onClick={() => this.input.click()}
                    >
                      Upload
                    </Button>
                  </FormGroup>
                  <input
                    type="file"
                    name="coverart"
                    className="hidden_file_upload"
                    ref={input => (this.input = input)}
                    accept="image/*"
                    onChange={this.handleImageChange}
                  />
                </Col>
                <Col xs={2}>
                  <div className="image_container">
                    <Image
                      src={
                        this.state.imagePreviewUrl
                          ? this.state.imagePreviewUrl
                          : missingAlbumArt
                      }
                      className="image_preview"
                    />
                  </div>
                </Col>
              </Row>
              <Row />
            </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close} bsSize="large">
              Cancel
            </Button>
            <Button onClick={this.submitForm} bsSize="large" bsStyle="primary">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </div>
    );
  }
}

export default LibraryForm;
