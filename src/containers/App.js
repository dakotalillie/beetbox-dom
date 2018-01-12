import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/App/App';
import { noToken, fetchCurrentUser } from '../actions';

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  loading: state.currentUser.loading
});

export default withRouter(
  connect(mapStateToProps, { noToken, fetchCurrentUser })(App)
);
