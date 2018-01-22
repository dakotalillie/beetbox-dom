import { connect } from 'react-redux';
import NewItemModal from '../components/App/Home/NewItemModal/NewItemModal';
import {
  toggleNewItemModal,
  addLibrary,
  editLibrary,
  addFolder,
  editFolder
} from '../actions';

const mapStateToProps = state => ({
  newItemModal: state.newItemModal,
  libraries: state.libraries,
  folders: state.folders
});

export default connect(mapStateToProps, {
  toggleNewItemModal,
  addLibrary,
  editLibrary,
  addFolder,
  editFolder
})(NewItemModal);
