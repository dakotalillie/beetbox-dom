import { connect } from 'react-redux';
import HamburgerIcon from '../components/App/Home/Main/HamburgerIcon/HamburgerIcon';
import { toggleSidebar } from '../actions';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen
});

export default connect(mapStateToProps, { toggleSidebar })(HamburgerIcon);
