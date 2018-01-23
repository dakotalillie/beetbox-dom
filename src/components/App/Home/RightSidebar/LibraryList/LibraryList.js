import React, { Fragment } from 'react';
import { Glyphicon, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import './LibraryList.css';
import missingAlbumArt from '../../../../../assets/img/missing_albumart.jpg';

const LibraryList = ({
  libraries,
  selectedLibrary,
  deleteLibrary,
  toggleNewItemModal,
  handleLibrarySelect
}) => {
  function mapLibraries() {
    return Object.keys(libraries)
      .sort((a, b) => {
        const nameA = libraries[a].name.toLowerCase();
        const nameB = libraries[b].name.toLowerCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
      })
      .map(key => {
        const { id, name, artwork_url } = libraries[key];
        return (
          <Fragment key={id}>
            <ContextMenuTrigger id={`context_${id}`}>
              <ListGroupItem>
                <Image
                  src={artwork_url ? artwork_url : missingAlbumArt}
                  className="library_artwork"
                />
                <div className="pretty p-default p-curve p-thick">
                  <input
                    type="radio"
                    name="library"
                    onChange={() => handleLibrarySelect(id)}
                    checked={id === selectedLibrary}
                  />
                  <div className="state">
                    <i className="icon mdi mdi-check" />
                    <label>{name}</label>
                  </div>
                </div>
              </ListGroupItem>
            </ContextMenuTrigger>
            <ContextMenu id={`context_${id}`}>
              <MenuItem
                data={{}}
                onClick={() => toggleNewItemModal('library', id)}
              >
                <span>
                  <Glyphicon glyph="pencil" />
                  Edit
                </span>
              </MenuItem>
              <MenuItem data={{}} onClick={() => deleteLibrary(id)}>
                <span>
                  <Glyphicon glyph="trash" />
                  Delete
                </span>
              </MenuItem>
            </ContextMenu>
          </Fragment>
        );
      });
  }
  return (
    <div className="right_sidebar_library_list">
      <ListGroup>{mapLibraries()}</ListGroup>
    </div>
  );
};

export default LibraryList;
