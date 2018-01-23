import { connect } from 'react-redux';
import NewItemModal from '../components/App/Home/NewItemModal/NewItemModal';
import {
  toggleNewItemModal,
  addLibrary,
  editLibrary,
  addFolder,
  editFolder,
  addTag,
  editTag
} from '../actions';

const mapStateToProps = state => ({
  newItemModal: state.newItemModal,
  libraries: state.libraries,
  folders: state.folders,
  tags: state.tags
});

export default connect(mapStateToProps, {
  toggleNewItemModal,
  addLibrary,
  editLibrary,
  addFolder,
  editFolder,
  addTag,
  editTag
})(NewItemModal);
