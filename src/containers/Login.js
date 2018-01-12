import { connect } from 'react-redux';
import Login from '../components/App/Welcome/Login/Login';
import { login } from '../actions';

export default connect(null, { login })(Login);
