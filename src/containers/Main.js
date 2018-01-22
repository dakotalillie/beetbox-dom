import { connect } from 'react-redux';
import Main from '../components/App/Home/Main/Main';
import { addSamples } from '../actions';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen,
  rightSidebarOpen: state.rightSidebarOpen
});

export default connect(mapStateToProps, { addSamples })(Main);
