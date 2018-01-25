import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Home from '../../containers/Home';
import Welcome from './Welcome/Welcome';
import LoadingPage from './LoadingPage/LoadingPage';

class App extends React.Component {
  componentWillMount = () => {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.fetchCurrentUser();
    } else {
      this.props.noToken();
    }
  };

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => {
            if (this.props.loading) {
              return <LoadingPage />;
            } else if (this.props.isLoggedIn) {
              return <Home />;
            } else {
              return <Redirect to="/welcome" />;
            }
          }}
        />
        <Route exact path="/welcome" component={Welcome} />
      </div>
    );
  }
}

export default App;
