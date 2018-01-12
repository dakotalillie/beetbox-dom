import React from 'react';
import { Button, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';
import './Login.css';

class Login extends React.Component {
  state = {
    username: {
      value: '',
      validation: null,
      error: ''
    },
    password: {
      value: '',
      validation: null,
      error: ''
    },
    error: ''
  };

  handleChange = (e, target) => {
    const newState = { ...this.state };
    newState[target].value = e.target.value;
    this.setState(newState);
  };

  handleSubmit = e => {
    e.preventDefault();
    // if (this.checkForBlankFields()) {
    //   return;
    // }
    this.props.login(this.state.username.value, this.state.password.value);
  };

  checkForBlankFields = () => {
    let errors = false;
    for (let key in this.state) {
      if (!this.state[key].value) {
        this.renderError(key, 'required field');
        errors = true;
      }
    }
    return errors;
  };

  renderError = (target, message) => {
    const newState = { ...this.state };
    newState[target].validation = 'error';
    newState[target].error = message;
    this.setState(newState);
  };

  renderNormal = target => {
    const newState = { ...this.state };
    newState[target].validation = null;
    newState[target].error = '';
    this.setState(newState);
  };

  render = () => (
    <div className="login">
      <Button
        className="back_button"
        onClick={() => this.props.changeActive('greeting')}
      >
        Back
      </Button>
      <h2 className="title">Login</h2>
      {/* <hr /> */}
      <form onSubmit={this.handleSubmit}>
        <FormGroup validationState={this.state.username.validation}>
          <FormControl
            type="text"
            value={this.state.username.value}
            placeholder="username"
            bsSize="large"
            onChange={e => this.handleChange(e, 'username')}
            onBlur={e => this.renderNormal('username')}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.state.username.error}</HelpBlock>
        </FormGroup>
        <FormGroup validationState={this.state.password.validation}>
          <FormControl
            type="password"
            value={this.state.password.value}
            placeholder="password"
            bsSize="large"
            onChange={e => this.handleChange(e, 'password')}
            onBlur={e => this.renderNormal('password')}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.state.password.error}</HelpBlock>
        </FormGroup>
        <Button
          className="submit_button"
          type="submit"
          bsStyle="primary"
          bsSize="large"
          block
        >
          Submit
        </Button>
        <HelpBlock>{this.state.error}</HelpBlock>
      </form>
    </div>
  );
}

export default Login;
