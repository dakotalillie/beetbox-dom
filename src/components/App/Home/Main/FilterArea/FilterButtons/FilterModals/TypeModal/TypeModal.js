import React from 'react';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import './TypeModal.css';

const TypeModal = ({
  show,
  toggleModal,
  left,
  handleClick,
  activeSampleType
}) => {
  return (
    <Modal
      show={show}
      onHide={toggleModal}
      className="type_modal"
      style={{ left }}
    >
      <Modal.Body>
        <Button
          bsSize="large"
          name="one-shot"
          onClick={() => handleClick('one-shot')}
          className={activeSampleType === 'one-shot' ? 'active' : ''}
        >
          <Glyphicon glyph="arrow-right" name="one-shot" />
          One Shot
        </Button>
        <Button
          bsSize="large"
          className={'right' + (activeSampleType === 'loop' ? ' active' : '')}
          name="loop"
          onClick={() => handleClick('loop')}
        >
          <Glyphicon glyph="refresh" name="loop" className="right" />
          Loop
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default TypeModal;
