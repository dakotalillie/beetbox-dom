import React from 'react';
import { Modal } from 'react-bootstrap';
import LibraryForm from './LibraryForm/LibraryForm';
import FolderForm from './FolderForm/FolderForm';
import './NewItemModal.css';

class NewItemModal extends React.Component {
  whichForm = () => {
    switch (this.props.newItemModal.item) {
      case 'library':
        const library = this.props.libraries[this.props.newItemModal.id]
          ? this.props.libraries[this.props.newItemModal.id]
          : {};
        return (
          <LibraryForm
            id={library.id}
            name={library.name}
            imagePreviewUrl={library.artwork_url}
            close={this.props.toggleNewItemModal}
            addLibrary={this.props.addLibrary}
            editLibrary={this.props.editLibrary}
          />
        );
      case 'folder':
        const folder = this.props.folders[this.props.newItemModal.id]
          ? this.props.folders[this.props.newItemModal.id]
          : {};
        return (
          <FolderForm
            id={folder.id}
            name={folder.name}
            close={this.props.toggleNewItemModal}
            folders={this.props.folders}
            addFolder={this.props.addFolder}
            editFolder={this.props.editFolder}
          />
        );
      default:
        return null;
    }
  };
  render = () => {
    return (
      <Modal
        show={this.props.newItemModal.open}
        onHide={this.props.toggleNewItemModal}
        className="new_item_modal"
      >
        {this.whichForm()}
      </Modal>
    );
  };
}

export default NewItemModal;
