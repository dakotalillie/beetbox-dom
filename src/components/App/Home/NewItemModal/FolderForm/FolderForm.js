import React from 'react';
import {
  Button,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Grid,
  Modal,
  Row
} from 'react-bootstrap';
// import DropdownTreeSelect from 'react-dropdown-tree-select';

class FolderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id ? props.id : null,
      name: props.name ? props.name : '',
      parent: null
    };
  }
  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    if (!this.state.name) return;
    const formData = new FormData();
    formData.append('folder[name]', this.state.name);
    if (this.state.parent) formData.append('folder[parent]', this.state.parent);
    if (!this.state.id) {
      this.props.addFolder(formData);
    } else {
      this.props.editFolder(formData, this.state.id);
    }
    this.props.close();
  };
  render() {
    return (
      <div className="folder_form">
        <form ref={form => (this.form = form)} onSubmit={this.submitForm}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.id ? 'Edit Folder' : 'New Folder'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid>
              <Row>
                <Col xs={9}>
                  <FormGroup>
                    <ControlLabel>Folder Name</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.name}
                      placeholder="My Folder"
                      onChange={this.handleChange}
                      autoComplete="off"
                      bsSize="large"
                      autoFocus={true}
                    />
                  </FormGroup>
                </Col>
                <Col xs={3}>
                  <FormGroup>
                    <ControlLabel>Parent</ControlLabel>
                    <Button bsSize="large" block>
                      Select
                    </Button>
                  </FormGroup>
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

export default FolderForm;
