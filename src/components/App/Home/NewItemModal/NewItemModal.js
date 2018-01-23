import React from 'react';
import { Modal } from 'react-bootstrap';
import LibraryForm from './LibraryForm/LibraryForm';
import FolderForm from './FolderForm/FolderForm';
import './NewItemModal.css';
import TagForm from './TagForm/TagForm';

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
      case 'tag':
        const tag = this.props.tags[this.props.newItemModal.id]
          ? this.props.tags[this.props.newItemModal.id]
          : {};
        return (
          <TagForm
            id={tag.id}
            name={tag.name}
            close={this.props.toggleNewItemModal}
            tags={this.props.tags}
            addTag={this.props.addTag}
            editTag={this.props.editTag}
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
