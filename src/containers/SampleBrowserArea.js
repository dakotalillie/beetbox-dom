import { connect } from 'react-redux';
import SampleBrowserArea from '../components/App/Home/Main/SampleBrowserArea/SampleBrowserArea';
import {
  downloadSamples,
  toggleSampleSelect,
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
  rightSidebarOpen: state.rightSidebarOpen,
  selectedSamples: [...state.selectedSamples].map(id => state.samples[id]),
  displayedSamples: getDisplayedSamples(state),
  orderBy: state.filters.orderBy
});

export default connect(mapStateToProps, {
  downloadSamples,
  toggleSampleSelect,
  toggleAllSamplesSelect,
  addSamples,
  deleteSamples,
  reorderSamples,
  toggleRightSidebar
})(SampleBrowserArea);
