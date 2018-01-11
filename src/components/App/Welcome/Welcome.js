import React from 'react';
import './Welcome.css';
import Greeting from './Greeting/Greeting';
import Login from './Login/Login';
import Signup from './Signup/Signup';

class Welcome extends React.Component {
  state = {
    active: 'greeting'
  };

  changeActive = active => {
    this.setState({ active });
  };

  render = () => {
    const page = determinePage(this);
    return <div className="welcome">{page}</div>;
  };
}

export default Welcome;

// helpers

function determinePage(component) {
  switch (component.state.active) {
    case 'greeting':
      return <Greeting changeActive={component.changeActive} />;
    case 'login':
      return <Login changeActive={component.changeActive} />;
    case 'signup':
      return <Signup changeActive={component.changeActive} />;
    default:
      throw new Error(
        'Unrecognized value for "active" in Welcome component state'
      );
  }
}
