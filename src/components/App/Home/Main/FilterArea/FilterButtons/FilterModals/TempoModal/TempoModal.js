import React from 'react';
import { Modal } from 'react-bootstrap';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './TempoModal.css';

const TempoModal = ({ show, toggleModal, left, changeTempo, tempo }) => {
  return (
    <Modal
      show={show}
      onHide={toggleModal}
      className="tempo_modal"
      style={{ left }}
    >
      <Modal.Body>
        <Range
          min={40}
          max={200}
          defaultValue={[tempo.low, tempo.high]}
          allowCross={false}
          onChange={changeTempo}
        />
        <div className="tempo_label">
          <div className="label_display left">
            <p>
              <strong>Min</strong>
            </p>
            <p className="tempo">{tempo.low} bpm</p>
          </div>
          <div className="label_display right">
            <p>
              <strong>Max</strong>
            </p>
            <p className="tempo">{tempo.high} bpm</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TempoModal;
