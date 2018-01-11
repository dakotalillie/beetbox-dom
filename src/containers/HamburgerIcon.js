import { connect } from 'react-redux';
import HamburgerIcon from '../components/App/Home/Main/HamburgerIcon/HamburgerIcon';
import { toggleSidebar } from '../actions';

export default connect(null, { toggleSidebar })(HamburgerIcon);
