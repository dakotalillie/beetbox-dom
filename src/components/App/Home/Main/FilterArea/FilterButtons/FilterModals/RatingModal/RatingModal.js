import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactStars from 'react-stars';
import './RatingModal.css';

const size = 20;

const RatingModal = ({
  show,
  toggleModal,
  left,
  changeRating,
  selectedRatings
}) => {
  return (
    <Modal
      show={show}
      onHide={toggleModal}
      className="rating_modal"
      style={{ left }}
    >
      <Modal.Body>
        <Button
          block
          onClick={() => changeRating(1)}
          className={selectedRatings.includes(1) ? 'active' : ''}
        >
          <ReactStars count={5} value={1} size={size} edit={false} />
        </Button>
        <Button
          block
          onClick={() => changeRating(2)}
          className={selectedRatings.includes(2) ? 'active' : ''}
        >
          <ReactStars count={5} value={2} size={size} edit={false} />
        </Button>
        <Button
          block
          onClick={() => changeRating(3)}
          className={selectedRatings.includes(3) ? 'active' : ''}
        >
          <ReactStars count={5} value={3} size={size} edit={false} />
        </Button>
        <Button
          block
          onClick={() => changeRating(4)}
          className={selectedRatings.includes(4) ? 'active' : ''}
        >
          <ReactStars count={5} value={4} size={size} edit={false} />
        </Button>
        <Button
          block
          onClick={() => changeRating(5)}
          className={selectedRatings.includes(5) ? 'active' : ''}
        >
          <ReactStars count={5} value={5} size={size} edit={false} />
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default RatingModal;
