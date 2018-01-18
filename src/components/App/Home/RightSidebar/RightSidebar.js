import React from 'react';
import {
  Col,
  ControlLabel,
  Dropdown,
  FormControl,
  FormGroup,
  Glyphicon,
  Grid,
  InputGroup,
  MenuItem,
  Panel,
  Row
} from 'react-bootstrap';
import ReactStars from 'react-stars';
import './RightSidebar.css';
import CircleOfFifths from './CircleOfFifths/CircleOfFifths';
import LibraryList from './LibraryList/LibraryList';
import FolderList from './FolderList/FolderList';

class RightSidebar extends React.Component {
  state = {
    name: {
      disabled: false,
      value: ''
    },
    type: {
      value: ''
    },
    tempo: {
      value: ''
    },
    favorite: {
      hover: false,
      value: false
    },
    rating: {
      value: 0
    },
    key: {
      collapsed: true
    },
    library: {
      collapsed: true
    },
    folders: {
      collapsed: true
    },
    tags: {
      collapsed: true
    }
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.selectedSamples.length === 1) {
      this.setState(prevState => ({
        ...prevState,
        name: {
          ...prevState.name,
          disabled: false,
          value: nextProps.selectedSamples[0].name
        }
      }));
    } else if (nextProps.selectedSamples.length === 0) {
      this.setState(prevState => ({
        ...prevState,
        name: {
          ...prevState.name,
          disabled: false,
          value: ''
        }
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        name: {
          ...prevState.name,
          disabled: true,
          value: ''
        }
      }));
    }
  };
  handleChange = e => {
    let value = e.target.value;
    switch (e.target.name) {
      case 'name':
        this.setState(prevState => ({
          ...prevState,
          name: { ...prevState.name, value }
        }));
        break;
      case 'tempo':
        this.setState(prevState => ({
          ...prevState,
          tempo: { ...prevState.tempo, value }
        }));
        break;
      default:
        break;
    }
  };
  determineHeartGlyphState = () => {
    const { hover, value } = this.state.favorite;
    if (!hover && !value) {
      return 'heart-empty';
    } else if (hover && !value) {
      return;
    }
  };
  render = () => {
    return (
      <div className="right_sidebar">
        <Grid className="form_container">
          <form>
            <Row>
              <Col xs={9}>
                <FormGroup>
                  <ControlLabel>Name</ControlLabel>
                  <FormControl
                    type="text"
                    value={
                      this.state.name.disabled
                        ? 'multiple selected'
                        : this.state.name.value
                    }
                    onChange={this.handleChange}
                    bsSize="large"
                    name="name"
                    disabled={this.state.name.disabled}
                    className={this.state.name.disabled ? 'italicized' : null}
                  />
                </FormGroup>
              </Col>
              <Col xs={3}>
                <FormGroup>
                  <ControlLabel className="centered">Favorite</ControlLabel>
                  <Glyphicon
                    glyph={
                      !this.state.favorite.hover && !this.state.favorite.value
                        ? 'heart-empty'
                        : 'heart'
                    }
                    className={
                      'favorite_button' +
                      (this.state.favorite.value ? ' favorited' : '')
                    }
                    onMouseEnter={() =>
                      this.setState(prevState => ({
                        ...prevState,
                        favorite: { ...prevState.favorite, hover: true }
                      }))
                    }
                    onMouseLeave={() =>
                      this.setState(prevState => ({
                        ...prevState,
                        favorite: { ...prevState.favorite, hover: false }
                      }))
                    }
                    onClick={() =>
                      this.setState(prevState => ({
                        ...prevState,
                        favorite: {
                          ...prevState.favorite,
                          value: !prevState.favorite.value
                        }
                      }))
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <FormGroup>
                  <ControlLabel>Type</ControlLabel>
                  <Dropdown id="type-dropdown">
                    <Dropdown.Toggle bsSize="large">
                      {this.state.type.value ? this.state.type.value : '--'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <MenuItem eventKey="1">--</MenuItem>
                      <MenuItem eventKey="2">One-Shot</MenuItem>
                      <MenuItem eventKey="3">Loop</MenuItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </FormGroup>
              </Col>
              <Col sm={4}>
                <FormGroup>
                  <ControlLabel>Tempo</ControlLabel>
                  <InputGroup>
                    <FormControl
                      type="text"
                      value={this.state.tempo.value}
                      onChange={this.handleChange}
                      bsSize="large"
                      name="tempo"
                      className="tempo_field"
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
                      onClick={() => {
                        this.setState(prevState => ({
                          ...prevState,
                          rating: {
                            ...prevState.rating,
                            value: 0
                          }
                        }));
                      }}
                    />
                  </ControlLabel>
                  <ReactStars
                    count={5}
                    size={18}
                    half={false}
                    value={this.state.rating.value}
                    onChange={newRating => {
                      this.setState(prevState => ({
                        ...prevState,
                        rating: {
                          ...prevState.rating,
                          value: newRating
                        }
                      }));
                    }}
                    className="favorite_stars"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="no_margin">
              <Col xs={12}>
                <Panel id="collapsible-panel-example-2">
                  <Panel.Heading>
                    <Panel.Title>
                      Key
                      <Panel.Toggle componentClass="a">
                        <Glyphicon
                          glyph={
                            this.state.key.collapsed
                              ? 'triangle-right'
                              : 'triangle-bottom'
                          }
                          onClick={() =>
                            this.setState(prevState => ({
                              ...prevState,
                              key: {
                                ...prevState.key,
                                collapsed: !prevState.key.collapsed
                              }
                            }))
                          }
                        />
                      </Panel.Toggle>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                      <CircleOfFifths />
                    </Panel.Body>
                  </Panel.Collapse>
                </Panel>
              </Col>
            </Row>
            <Row className="no_margin">
              <Col xs={12}>
                <Panel id="collapsible-panel-example-2">
                  <Panel.Heading>
                    <Panel.Title>
                      Library
                      <Panel.Toggle componentClass="a">
                        <Glyphicon
                          glyph={
                            this.state.library.collapsed
                              ? 'triangle-right'
                              : 'triangle-bottom'
                          }
                          onClick={() =>
                            this.setState(prevState => ({
                              ...prevState,
                              library: {
                                ...prevState.library,
                                collapsed: !prevState.library.collapsed
                              }
                            }))
                          }
                        />
                      </Panel.Toggle>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                      <LibraryList />
                    </Panel.Body>
                  </Panel.Collapse>
                </Panel>
              </Col>
            </Row>
            <Row className="no_margin">
              <Col xs={12}>
                <Panel id="collapsible-panel-example-2">
                  <Panel.Heading>
                    <Panel.Title>
                      Folders
                      <Panel.Toggle componentClass="a">
                        <Glyphicon
                          glyph={
                            this.state.folders.collapsed
                              ? 'triangle-right'
                              : 'triangle-bottom'
                          }
                          onClick={() =>
                            this.setState(prevState => ({
                              ...prevState,
                              folders: {
                                ...prevState.folders,
                                collapsed: !prevState.folders.collapsed
                              }
                            }))
                          }
                        />
                      </Panel.Toggle>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                      <FolderList />
                    </Panel.Body>
                  </Panel.Collapse>
                </Panel>
              </Col>
            </Row>
            <Row className="no_margin">
              <Col xs={12}>
                <Panel id="collapsible-panel-example-2">
                  <Panel.Heading>
                    <Panel.Title>
                      Tags
                      <Panel.Toggle componentClass="a">
                        <Glyphicon glyph="triangle-right" />
                      </Panel.Toggle>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident.
                    </Panel.Body>
                  </Panel.Collapse>
                </Panel>
              </Col>
            </Row>
          </form>
        </Grid>
      </div>
    );
  };
}

export default RightSidebar;
