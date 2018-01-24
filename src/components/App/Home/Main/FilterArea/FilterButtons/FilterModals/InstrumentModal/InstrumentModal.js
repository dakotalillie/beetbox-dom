import React from 'react';
import { Col, Grid, Modal } from 'react-bootstrap';
import './InstrumentModal.css';

const InstrumentModal = ({
  show,
  toggleModal,
  left,
  instruments,
  changeInstrument,
  selectedInstruments
}) => {
  return (
    <Modal
      show={show}
      onHide={toggleModal}
      className="instrument_modal"
      style={{ left }}
    >
      <Modal.Body>
        <Grid>
          {instruments.map(instrument => {
            return (
              <Col xs={6} key={instrument}>
                <div className="pretty p-default p-curve p-thick">
                  <input
                    type="checkbox"
                    name={instrument}
                    onChange={() => changeInstrument(instrument)}
                    checked={selectedInstruments.includes(instrument)}
                  />
                  <div className="state">
                    <i className="icon mdi mdi-check" />
                    <label>{instrument}</label>
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

export default InstrumentModal;
