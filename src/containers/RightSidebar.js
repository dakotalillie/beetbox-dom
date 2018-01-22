import { connect } from 'react-redux';
import RightSidebar from '../components/App/Home/RightSidebar/RightSidebar';
import { toggleNewItemModal, deleteLibrary, deleteFolder } from '../actions';

const mapStateToProps = state => ({
  selectedSamples: state.selectedSamples.map(id => state.samples[id]),
  folders: state.folders,
  libraries: state.libraries
});

export default connect(mapStateToProps, {
  toggleNewItemModal,
  deleteLibrary,
  deleteFolder
})(RightSidebar);
