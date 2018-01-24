import { connect } from 'react-redux';
import Main from '../components/App/Home/Main/Main';
import { addSamples, resetFilters, toggleFilterArea } from '../actions';
import { getDisplayedCategory } from '../selectors';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen,
  rightSidebarOpen: state.rightSidebarOpen,
  filterAreaOpen: state.filterAreaOpen,
  displayedCategory: getDisplayedCategory(state)
});

export default connect(mapStateToProps, {
  addSamples,
  resetFilters,
  toggleFilterArea
})(Main);
