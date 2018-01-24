import React from 'react';
import { Col, Grid, Modal } from 'react-bootstrap';
import './GenreModal.css';

const GenreModal = ({
  show,
  toggleModal,
  left,
  genres,
  changeGenre,
  selectedGenres
}) => {
  return (
    <Modal
      show={show}
      onHide={toggleModal}
      className="genre_modal"
      style={{ left }}
    >
      <Modal.Body>
        <Grid>
          {genres.map(genre => {
            return (
              <Col xs={6} key={genre}>
                <div className="pretty p-default p-curve p-thick">
                  <input
                    type="checkbox"
                    name={genre}
                    onChange={() => changeGenre(genre)}
                    checked={selectedGenres.includes(genre)}
                  />
                  <div className="state">
                    <i className="icon mdi mdi-check" />
                    <label>{genre}</label>
                  </div>
                </div>
              </Col>
            );
          })}
        </Grid>
      </Modal.Body>
    </Modal>
  );
};

export default GenreModal;
