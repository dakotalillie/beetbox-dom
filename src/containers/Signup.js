import { connect } from 'react-redux';
import Signup from '../components/App/Welcome/Signup/Signup';
import { signup } from '../actions';

export default connect(null, { signup })(Signup);
