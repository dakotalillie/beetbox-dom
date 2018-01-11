import React from 'react';
import { Button } from 'react-bootstrap';
import './Greeting.css';

const Greeting = ({ changeActive }) => {
  return (
    <div className="greeting">
      <h1 className="title">BeetBox</h1>
      <h3 className="subtitle">Cloud-Based Sample Library Manager</h3>
      <Button
        bsSize="large"
        className="login_button"
        onClick={() => changeActive('login')}
      >
        Log In
      </Button>
      <Button
        bsSize="large"
        className="signup_button"
        bsStyle="primary"
        onClick={() => changeActive('signup')}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Greeting;
