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

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id ? props.id : null,
      name: props.name ? props.name : ''
    };
  }
  handleChange = e => {
    this.setState({ name: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    if (!this.state.name) return;
    const formData = new FormData();
    formData.append('tag[name]', this.state.name);
    if (!this.state.id) {
      this.props.addTag(formData);
    } else {
      this.props.editTag(formData, this.state.id);
    }
    this.props.close();
  };
  render() {
    return (
      <div className="tag_form">
        <form ref={form => (this.form = form)} onSubmit={this.submitForm}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.id ? 'Edit Tag' : 'New Tag'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Grid>
              <Row>
                <Col xs={12}>
                  <FormGroup>
                    <ControlLabel>Tag Name</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.state.name}
                      placeholder="My Tag"
                      onChange={this.handleChange}
                      autoComplete="off"
                      bsSize="large"
                      autoFocus={true}
                    />
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

export default TagForm;
