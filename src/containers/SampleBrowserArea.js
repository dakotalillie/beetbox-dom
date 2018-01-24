import { connect } from 'react-redux';
import SampleBrowserArea from '../components/App/Home/Main/SampleBrowserArea/SampleBrowserArea';
import {
  downloadSamples,
  selectSample,
  selectMultipleSamples,
  toggleAllSamplesSelect,
  addSamples,
  deleteSamples,
  reorderSamples,
  toggleRightSidebar
} from '../actions';
import { getDisplayedSamples } from '../selectors';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  sampleSearch: state.sampleSearch,
  sidebarOpen: state.sidebarOpen,
  filterAreaOpen: state.filterAreaOpen,
  rightSidebarOpen: state.rightSidebarOpen,
  selectedSamples: [...state.selectedSamples].map(id => state.samples[id]),
  displayedSamples: getDisplayedSamples(state),
  orderBy: state.filters.orderBy,
  libraries: state.libraries
});

export default connect(mapStateToProps, {
  downloadSamples,
  selectSample,
  selectMultipleSamples,
  toggleAllSamplesSelect,
  addSamples,
  deleteSamples,
  reorderSamples,
  toggleRightSidebar
})(SampleBrowserArea);
