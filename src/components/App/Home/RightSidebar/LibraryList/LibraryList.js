import React from 'react';
import {
  Button,
  Glyphicon,
  Image,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import './LibraryList.css';
import missingAlbumArt from '../../../../../assets/img/missing_albumart.jpg';

const LibraryList = () => {
  return (
    <div className="right_sidebar_library_list">
      <Button className="add_library_button">
        <Glyphicon glyph="plus" />
        Add Library
      </Button>
      <ListGroup>
        <ListGroupItem onClick={() => console.log('hi')}>
          <Image src={missingAlbumArt} className="library_artwork" />Library 1
        </ListGroupItem>
        <ListGroupItem onClick={() => console.log('hi')}>
          <Image src={missingAlbumArt} className="library_artwork" />Library 2
        </ListGroupItem>
        <ListGroupItem onClick={() => console.log('hi')}>
          <Image src={missingAlbumArt} className="library_artwork" />Library 3
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default LibraryList;
