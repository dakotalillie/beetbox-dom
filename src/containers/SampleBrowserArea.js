import { connect } from 'react-redux';
import SampleBrowserArea from '../components/App/Home/Main/SampleBrowserArea/SampleBrowserArea';
import {
  downloadSamples,
  toggleSampleSelect,
  changeFocusedSample,
  toggleAllSamplesSelect
} from '../actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  displayedSamples: state.displayedSamples,
  sampleSearch: state.sampleSearch,
  sidebarOpen: state.sidebarOpen,
  selectedSamples: [...state.selectedSamples].map(id => state.samples[id]),
  focusedSample: state.focusedSample,
  dropzoneVisible: state.dropzoneVisible
});

export default connect(mapStateToProps, {
  downloadSamples,
  toggleSampleSelect,
  changeFocusedSample,
  toggleAllSamplesSelect
})(SampleBrowserArea);
