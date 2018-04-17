import React from 'react';
import { Modal } from 'react-bootstrap';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './TempoModal.css';

class TempoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowTempo: props.tempo.low,
      hiTempo: props.tempo.high
    };
  }
  componentWillReceiveProps = nextProps => {
    this.setState({
      lowTempo: nextProps.tempo.low,
      hiTempo: nextProps.tempo.high
    });
  };
  handleChange = e => {
    this.setState({ lowTempo: e[0], hiTempo: e[1] });
  };
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.toggleModal}
        className="tempo_modal"
        style={{ left: this.props.left }}
      >
        <Modal.Body>
          <Range
            min={40}
            max={200}
            defaultValue={[this.props.tempo.low, this.props.tempo.high]}
            allowCross={false}
            onChange={this.handleChange}
            onAfterChange={this.props.changeTempo}
          />
          <div className="tempo_label">
            <div className="label_display left">
              <p>
                <strong>Min</strong>
              </p>
              <p className="tempo">{this.state.lowTempo} bpm</p>
            </div>
            <div className="label_display right">
              <p>
                <strong>Max</strong>
              </p>
              <p className="tempo">{this.state.hiTempo} bpm</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default TempoModal;
