import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './FilterButtons.css';
import FilterButton from './FilterButton/FilterButton';
import TypeModal from './FilterModals/TypeModal/TypeModal';
import InstrumentModal from './FilterModals/InstrumentModal/InstrumentModal';

class FilterButtons extends React.Component {
  state = {
    showModal: '',
    left: 0
  };
  handleClick = target => {
    switch (target) {
      case 'one-shot':
        this.props.changeSampleType('one-shot');
        break;
      case 'loop':
        this.props.changeSampleType('loop');
        break;
      default:
        break;
    }
  };
  toggleModal = (type = '') => {
    if (type) {
      this.setState(
        {
          left: document
            .querySelector(`#${type}_button`)
            .getBoundingClientRect().x
        },
        () => {
          this.setState({ showModal: type });
        }
      );
    } else {
      this.setState({ showModal: type });
    }
  };
  render() {
    return (
      <div className="filter_buttons">
        <Grid className="filter_buttons_container">
          <Row>
            <Col sm={2}>
              <FilterButton
                text="Type"
                toggleModal={this.toggleModal}
                active={this.props.filters.sampleType}
              />
              <TypeModal
                show={this.state.showModal === 'type'}
                toggleModal={this.toggleModal}
                left={this.state.left}
                handleClick={this.handleClick}
                activeSampleType={this.props.filters.sampleType}
              />
            </Col>
            <Col sm={2}>
              <FilterButton
                text="Instrument"
                toggleModal={this.toggleModal}
                active={this.props.filters.instruments.length}
              />
              <InstrumentModal
                show={this.state.showModal === 'instrument'}
                toggleModal={this.toggleModal}
                left={this.state.left}
                instruments={getUniqInstruments(this.props.samples)}
                changeInstrument={this.props.changeInstrument}
                selectedInstruments={this.props.filters.instruments}
              />
            </Col>
            <Col sm={2}>
              <FilterButton text="Tempo" />
            </Col>
            <Col sm={2}>
              <FilterButton text="Key" />
            </Col>
            <Col sm={2}>
              <FilterButton text="Genre" />
            </Col>
            <Col sm={2}>
              <FilterButton text="Rating" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FilterButtons;

// helpers

function getUniqInstruments(samples) {
  const instruments = Object.keys(samples).map(
    sampleId => samples[sampleId].instrument
  );
  const uniqueValues = instruments.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  const sortedUniqValues = uniqueValues.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    else if (a.toLowerCase() < b.toLowerCase()) return -1;
    else return 0;
  });
  return sortedUniqValues;
}
