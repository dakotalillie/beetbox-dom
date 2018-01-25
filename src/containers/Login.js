import { connect } from 'react-redux';
import Login from '../components/App/Welcome/Login/Login';
import { login, resetError } from '../actions';

const mapStateToProps = state => ({
  error: state.currentUser.error
});

export default connect(mapStateToProps, { login, resetError })(Login);
