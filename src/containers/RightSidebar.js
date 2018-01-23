import { connect } from 'react-redux';
import RightSidebar from '../components/App/Home/RightSidebar/RightSidebar';
import {
  toggleNewItemModal,
  editSamples,
  deleteLibrary,
  deleteFolder,
  deleteTag,
  updateTagCount,
  changeCategory
} from '../actions';

const mapStateToProps = state => ({
  selectedSamples: state.selectedSamples.map(id => state.samples[id]),
  folders: state.folders,
  libraries: state.libraries,
  tags: state.tags
});

export default connect(mapStateToProps, {
  toggleNewItemModal,
  editSamples,
  deleteLibrary,
  deleteFolder,
  deleteTag,
  updateTagCount,
  changeCategory
})(RightSidebar);
