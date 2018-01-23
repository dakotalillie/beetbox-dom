import { connect } from 'react-redux';
import Main from '../components/App/Home/Main/Main';
import { addSamples } from '../actions';
import { getDisplayedCategory } from '../selectors';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen,
  rightSidebarOpen: state.rightSidebarOpen,
  displayedCategory: getDisplayedCategory(state)
});

export default connect(mapStateToProps, { addSamples })(Main);
