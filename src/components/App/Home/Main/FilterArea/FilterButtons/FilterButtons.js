import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './FilterButtons.css';
import FilterButton from './FilterButton/FilterButton';
import TypeModal from './FilterModals/TypeModal/TypeModal';
import InstrumentModal from './FilterModals/InstrumentModal/InstrumentModal';
import TempoModal from './FilterModals/TempoModal/TempoModal';
import KeyModal from './FilterModals/KeyModal/KeyModal';
import GenreModal from './FilterModals/GenreModal/GenreModal';
import RatingModal from './FilterModals/RatingModal/RatingModal';

class FilterButtons extends React.Component {
  state = {
    showModal: '',
    left: 0
  };
  handleKeyClick = (keyNum, mode) => {
    const majorKeys = [
      'C',
      'G',
      'D',
      'A',
      'E',
      'B',
      'G♭',
      'D♭',
      'A♭',
      'E♭',
      'B♭',
      'F'
    ];
    const minorKeys = [
      'a',
      'e',
      'b',
      'f♯',
      'c♯',
      'g♯',
      'e♭',
      'b♭',
      'f',
      'c',
      'g',
      'd'
    ];
    if (mode === 'major') {
      this.props.changeKey(majorKeys[keyNum - 1]);
    } else {
      this.props.changeKey(minorKeys[keyNum - 1]);
    }
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
                instruments={getUniqItems(this.props.samples, 'instrument')}
                changeInstrument={this.props.changeInstrument}
                selectedInstruments={this.props.filters.instruments}
              />
            </Col>
            <Col sm={2}>
              <FilterButton
                text="Tempo"
                toggleModal={this.toggleModal}
                active={
                  this.props.filters.tempo.low !== 40 ||
                  this.props.filters.tempo.high !== 200
                }
              />
              <TempoModal
                show={this.state.showModal === 'tempo'}
                toggleModal={this.toggleModal}
                left={this.state.left}
                changeTempo={this.props.changeTempo}
                tempo={this.props.filters.tempo}
              />
            </Col>
            <Col sm={2}>
              <FilterButton
                text="Key"
                toggleModal={this.toggleModal}
                active={this.props.filters.key.length}
              />
              <KeyModal
                show={this.state.showModal === 'key'}
                toggleModal={this.toggleModal}
                left={this.state.left}
                handleClick={this.handleKeyClick}
                activeKeys={this.props.filters.key}
              />
            </Col>
            <Col sm={2}>
              <FilterButton
                text="Genre"
                toggleModal={this.toggleModal}
                active={this.props.filters.genre.length}
              />
              <GenreModal
                show={this.state.showModal === 'genre'}
                toggleModal={this.toggleModal}
                left={this.state.left}
                genres={getUniqItems(this.props.samples, 'genre')}
                changeGenre={this.props.changeGenre}
                selectedGenres={this.props.filters.genre}
              />
            </Col>
            <Col sm={2}>
              <FilterButton
                text="Rating"
                toggleModal={this.toggleModal}
                active={this.props.filters.rating.length}
              />
              <RatingModal
                show={this.state.showModal === 'rating'}
                toggleModal={this.toggleModal}
                left={this.state.left}
                changeRating={this.props.changeRating}
                selectedRatings={this.props.filters.rating}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FilterButtons;

// helpers

function getUniqItems(samples, field) {
  const items = Object.keys(samples).map(sampleId => samples[sampleId][field]);
  const uniqueValues = items.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  const sortedUniqValues = uniqueValues.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    else if (a.toLowerCase() < b.toLowerCase()) return -1;
    else return 0;
  });
  return sortedUniqValues;
}
