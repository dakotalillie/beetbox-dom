import React from 'react';
import { Modal } from 'react-bootstrap';
import CircleOfFifths from '../../../../../RightSidebar/CircleOfFifths/CircleOfFifths';
import './KeyModal.css';

const KeyModal = ({ show, toggleModal, left, handleClick, activeKeys }) => {
  return (
    <Modal
      show={show}
      onHide={toggleModal}
      className="key_modal"
      style={{ left }}
    >
      <Modal.Body>
        <CircleOfFifths
          handleClick={handleClick}
          multiple={true}
          activeKeys={activeKeys}
        />
      </Modal.Body>
    </Modal>
  );
};

export default KeyModal;
