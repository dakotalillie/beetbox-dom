import { connect } from 'react-redux';
import Home from '../components/App/Home/Home';
import { receiveAddedSample, toggleEditSampleModal } from '../actions';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen,
  currentUser: state.currentUser,
  editSampleModalOpen: state.editSampleModalOpen,
  selectedSamples: state.selectedSamples.map(id => state.samples[id])
});

export default connect(mapStateToProps, {
  receiveAddedSample,
  toggleEditSampleModal
})(Home);
