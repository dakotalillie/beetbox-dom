import React from 'react';
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Glyphicon,
  InputGroup,
  Row
} from 'react-bootstrap';
import ReactStars from 'react-stars';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './TopArea.css';

const TopArea = ({
  count,
  name,
  favorite,
  sample_type,
  tempo,
  rating,
  instrument,
  genre,
  handleChange,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  handleRating,
  handleBlur,
  handleSelect
}) => {
  return (
    <div className="top_area">
      <Row>
        <h4 className="count">
          Editing {count} Sample{count > 1 ? 's' : ''}
        </h4>
      </Row>
      <Row>
        <Col xs={9}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={name.disabled ? 'multiple selected' : name.value}
              onChange={handleChange}
              bsSize="large"
              name="name"
              disabled={name.disabled}
              className={name.disabled ? 'italicized' : ''}
            />
          </FormGroup>
        </Col>
        <Col xs={3}>
          <FormGroup>
            <ControlLabel className="centered">Favorite</ControlLabel>
            <Glyphicon
              glyph={
                !favorite.hover && !favorite.value ? 'heart-empty' : 'heart'
              }
              className={
                'favorite_button' + (favorite.value ? ' favorited' : '')
              }
              id="right_sidebar_favorite"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <FormGroup className="alt_dropdown">
            <ControlLabel>Type</ControlLabel>
            <Select
              name="sample_type"
              value={sample_type}
              onChange={handleSelect}
              options={[
                { value: '', label: '--' },
                { value: 'one-shot', label: 'one-shot' },
                { value: 'loop', label: 'loop' }
              ]}
              clearable={false}
              searchable={false}
            />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <ControlLabel>Tempo</ControlLabel>
            <InputGroup>
              <FormControl
                type="text"
                value={tempo}
                onChange={handleChange}
                bsSize="large"
                name="tempo"
                className="tempo_field"
                onBlur={handleBlur}
              />
              <InputGroup.Addon>bpm</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col sm={4}>
          <FormGroup>
            <ControlLabel>
              Rating<Glyphicon
                glyph="remove"
                className="remove_rating"
                id="right_sidebar_remove_rating"
                onClick={handleClick}
              />
            </ControlLabel>
            <ReactStars
              count={5}
              size={18}
              half={false}
              color2={'#c52545'}
              value={rating}
              name="rating"
              onChange={handleRating}
              className="favorite_stars"
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <ControlLabel>Instrument</ControlLabel>
            <FormControl
              type="text"
              value={instrument}
              onChange={handleChange}
              bsSize="large"
              name="instrument"
              onBlur={handleBlur}
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <ControlLabel>Genre</ControlLabel>
            <FormControl
              type="text"
              value={genre}
              onChange={handleChange}
              bsSize="large"
              name="genre"
              onBlur={handleBlur}
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default TopArea;
