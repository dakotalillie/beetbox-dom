import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './RightSidebar.css';
import CircleOfFifths from './CircleOfFifths/CircleOfFifths';
import LibraryList from './LibraryList/LibraryList';
import FolderList from './FolderList/FolderList';
import TagList from './TagList/TagList';
import DropdownPanel from './DropdownPanel/DropdownPanel';
import TopArea from './TopArea/TopArea';
// import 'bootstrap/dist/css/bootstrap.css';

class RightSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        disabled: props.selectedSamples.length > 1 ? true : false,
        value:
          props.selectedSamples.length === 1
            ? props.selectedSamples[0].name
            : ''
      },
      favorite: {
        hover: false,
        value: allTheSame(props.selectedSamples, 'favorite')
          ? props.selectedSamples[0].favorite
          : false
      },
      sample_type: allTheSame(props.selectedSamples, 'sample_type')
        ? props.selectedSamples[0].sample_type || ''
        : '',
      tempo: allTheSame(props.selectedSamples, 'tempo')
        ? props.selectedSamples[0].tempo
        : '',
      rating: allTheSame(props.selectedSamples, 'rating')
        ? props.selectedSamples[0].rating
        : 0,
      instrument: allTheSame(props.selectedSamples, 'instrument')
        ? props.selectedSamples[0].instrument || ''
        : '',
      genre: allTheSame(props.selectedSamples, 'genre')
        ? props.selectedSamples[0].genre || ''
        : '',
      key: {
        collapsed: true,
        value: allTheSame(props.selectedSamples, 'key')
          ? props.selectedSamples[0].key
          : ''
      },
      library: {
        collapsed: true,
        value: allTheSame(props.selectedSamples, 'library_id')
          ? props.selectedSamples[0].library_id || ''
          : ''
      },
      folders: {
        collapsed: true,
        value: allTheSame(props.selectedSamples, 'folders')
          ? findCommon(props.selectedSamples, 'folders')
          : []
      },
      tags: {
        collapsed: true,
        value: allTheSame(props.selectedSamples, 'tags')
          ? findCommon(props.selectedSamples, 'tags')
          : []
      }
    };
  }
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
    this.setState(prevState => ({
      ...prevState,
      favorite: {
        ...prevState.favorite,
        value: allTheSame(nextProps.selectedSamples, 'favorite')
          ? nextProps.selectedSamples[0].favorite
          : false
      },
      sample_type: allTheSame(nextProps.selectedSamples, 'sample_type')
        ? nextProps.selectedSamples[0].sample_type || ''
        : '',
      tempo: allTheSame(nextProps.selectedSamples, 'tempo')
        ? nextProps.selectedSamples[0].tempo
        : '',
      rating: allTheSame(nextProps.selectedSamples, 'rating')
        ? nextProps.selectedSamples[0].rating
        : 0,
      instrument: allTheSame(nextProps.selectedSamples, 'instrument')
        ? nextProps.selectedSamples[0].instrument || ''
        : '',
      genre: allTheSame(nextProps.selectedSamples, 'genre')
        ? nextProps.selectedSamples[0].genre || ''
        : '',
      key: {
        ...prevState.key,
        value: allTheSame(nextProps.selectedSamples, 'key')
          ? nextProps.selectedSamples[0].key
          : ''
      },
      library: {
        ...prevState.library,
        value: allTheSame(nextProps.selectedSamples, 'library_id')
          ? nextProps.selectedSamples[0].library_id || ''
          : ''
      },
      folders: {
        ...prevState.folders,
        value: allTheSame(nextProps.selectedSamples, 'folders')
          ? findCommon(nextProps.selectedSamples, 'folders')
          : []
      },
      tags: {
        ...prevState.tags,
        value: allTheSame(nextProps.selectedSamples, 'tags')
          ? findCommon(nextProps.selectedSamples, 'tags')
          : []
      }
    }));
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
        this.setState({ tempo: value });
        break;
      case 'instrument':
        this.setState({ instrument: value });
        break;
      case 'genre':
        this.setState({ genre: value });
        break;
      default:
        break;
    }
  };
  handleSelect = e => {
    this.props.editSamples(
      this.props.selectedSamples.map(sample => sample.id),
      { sample_type: e.value }
    );
    this.setState({ sample_type: e.value });
  };
  handleMouseEnter = e => {
    this.setState(prevState => ({
      ...prevState,
      favorite: { ...prevState.favorite, hover: true }
    }));
  };
  handleMouseLeave = e => {
    this.setState(prevState => ({
      ...prevState,
      favorite: { ...prevState.favorite, hover: false }
    }));
  };
  changeKey = keyVal => {
    this.props.editSamples(
      this.props.selectedSamples.map(sample => sample.id),
      { key: keyVal }
    );
    this.setState(prevState => ({
      ...prevState,
      key: {
        ...prevState.key,
        value: keyVal
      }
    }));
  };
  handleClick = (e, params) => {
    let keyVal;
    switch (e.target.id) {
      case 'right_sidebar_favorite':
        this.props.editSamples(
          this.props.selectedSamples.map(sample => sample.id),
          { favorite: !this.state.favorite.value }
        );
        this.setState(prevState => ({
          ...prevState,
          favorite: {
            ...prevState.favorite,
            value: !prevState.favorite.value
          }
        }));
        break;
      case 'right_sidebar_remove_rating':
        this.props.editSamples(
          this.props.selectedSamples.map(sample => sample.id),
          { rating: 0 }
        );
        this.setState({ rating: 0 });
        break;
      case 'key1':
        keyVal = params === 'major' ? 'C' : 'a';
        this.changeKey(keyVal);
        break;
      case 'key2':
        keyVal = params === 'major' ? 'G' : 'e';
        this.changeKey(keyVal);
        break;
      case 'key3':
        keyVal = params === 'major' ? 'D' : 'b';
        this.changeKey(keyVal);
        break;
      case 'key4':
        keyVal = params === 'major' ? 'A' : 'f♯';
        this.changeKey(keyVal);
        break;
      case 'key5':
        keyVal = params === 'major' ? 'E' : 'c♯';
        this.changeKey(keyVal);
        break;
      case 'key6':
        keyVal = params === 'major' ? 'B' : 'g♯';
        this.changeKey(keyVal);
        break;
      case 'key7':
        keyVal = params === 'major' ? 'G♭' : 'e♭';
        this.changeKey(keyVal);
        break;
      case 'key8':
        keyVal = params === 'major' ? 'D♭' : 'b♭';
        this.changeKey(keyVal);
        break;
      case 'key9':
        keyVal = params === 'major' ? 'A♭' : 'f';
        this.changeKey(keyVal);
        break;
      case 'key10':
        keyVal = params === 'major' ? 'E♭' : 'c';
        this.changeKey(keyVal);
        break;
      case 'key11':
        keyVal = params === 'major' ? 'B♭' : 'g';
        this.changeKey(keyVal);
        break;
      case 'key12':
        keyVal = params === 'major' ? 'F' : 'd';
        this.changeKey(keyVal);
        break;
      default:
        break;
    }
  };
  handleRating = rating => {
    this.props.editSamples(
      this.props.selectedSamples.map(sample => sample.id),
      { rating }
    );
    this.setState({ rating });
  };
  handleBlur = e => {
    switch (e.target.name) {
      case 'name':
        this.props.editSamples(this.props.selectedSamples[0].id, {
          name: this.state.name.value
        });
        break;
      case 'tempo':
        this.props.editSamples(
          this.props.selectedSamples.map(sample => sample.id),
          { tempo: Number(this.state.tempo) }
        );
        break;
      case 'instrument':
        this.props.editSamples(
          this.props.selectedSamples.map(sample => sample.id),
          { instrument: this.state.instrument }
        );
        break;
      case 'genre':
        this.props.editSamples(
          this.props.selectedSamples.map(sample => sample.id),
          { genre: this.state.genre }
        );
        break;
      default:
        break;
    }
  };
  handleLibrarySelect = id => {
    this.props.editSamples(
      this.props.selectedSamples.map(sample => sample.id),
      { library_id: id }
    );
    this.setState(prevState => ({
      ...prevState,
      library: {
        ...prevState.library,
        value: id
      }
    }));
  };
  handleCheckboxSelect = (field, id) => {
    let newItems;
    let body = {};
    if (this.state[field].value.includes(id)) {
      newItems = this.state[field].value.filter(itemId => itemId !== id);
      body[field] = id;
      body.action = 'remove';
    } else {
      newItems = [...this.state[field].value, id];
      body[field] = id;
      body.action = 'add';
    }
    this.props.editSamples(
      this.props.selectedSamples.map(sample => sample.id),
      body
    );
    if (field === 'tags') {
      let amount = this.props.selectedSamples.length;
      if (body.action === 'remove') amount *= -1;
      this.props.updateTagCount(id, amount);
    }
    this.setState(prevState => {
      const newState = { ...prevState };
      newState[field] = { ...newState[field], value: newItems };
      return newState;
    });
  };
  collapsePanel = key => {
    const newState = { ...this.state };
    newState[key] = { ...newState[key], collapsed: !newState[key].collapsed };
    this.setState(newState);
  };
  render = () => {
    return (
      <div className="right_sidebar">
        {this.props.selectedSamples.length ? (
          <Grid className="form_container">
            <TopArea
              name={this.state.name}
              favorite={this.state.favorite}
              sample_type={this.state.sample_type}
              tempo={this.state.tempo}
              rating={this.state.rating}
              instrument={this.state.instrument}
              genre={this.state.genre}
              handleChange={this.handleChange}
              handleMouseEnter={this.handleMouseEnter}
              handleMouseLeave={this.handleMouseLeave}
              handleClick={this.handleClick}
              handleRating={this.handleRating}
              handleBlur={this.handleBlur}
              handleSelect={this.handleSelect}
            />
            <Row className="no_margin">
              <Col xs={12}>
                <DropdownPanel
                  title="Key"
                  collapsed={this.state.key.collapsed}
                  collapseAction={() => this.collapsePanel('key')}
                >
                  <CircleOfFifths
                    handleClick={this.handleClick}
                    activeKey={this.state.key.value}
                  />
                </DropdownPanel>
              </Col>
            </Row>
            <Row className="no_margin">
              <Col xs={12}>
                <DropdownPanel
                  title="Library"
                  collapsed={this.state.library.collapsed}
                  collapseAction={() => this.collapsePanel('library')}
                  newItem={() => this.props.toggleNewItemModal('library')}
                >
                  <LibraryList
                    libraries={this.props.libraries}
                    selectedLibrary={this.state.library.value}
                    deleteLibrary={this.props.deleteLibrary}
                    toggleNewItemModal={this.props.toggleNewItemModal}
                    handleLibrarySelect={this.handleLibrarySelect}
                  />
                </DropdownPanel>
              </Col>
            </Row>
            <Row className="no_margin">
              <Col xs={12}>
                <DropdownPanel
                  title="Folders"
                  collapsed={this.state.folders.collapsed}
                  collapseAction={() => this.collapsePanel('folders')}
                  newItem={() => this.props.toggleNewItemModal('folder')}
                >
                  <FolderList
                    folders={this.props.folders}
                    selectedFolders={this.state.folders.value}
                    deleteFolder={this.props.deleteFolder}
                    toggleNewItemModal={this.props.toggleNewItemModal}
                    handleCheckboxSelect={this.handleCheckboxSelect}
                  />
                </DropdownPanel>
              </Col>
            </Row>
            <Row className="no_margin">
              <Col xs={12}>
                <DropdownPanel
                  title="Tags"
                  collapsed={this.state.tags.collapsed}
                  collapseAction={() => this.collapsePanel('tags')}
                  newItem={() => this.props.toggleNewItemModal('tag')}
                >
                  <TagList
                    tags={this.props.tags}
                    selectedTags={this.state.tags.value}
                    deleteTag={this.props.deleteTag}
                    toggleNewItemModal={this.props.toggleNewItemModal}
                    handleCheckboxSelect={this.handleCheckboxSelect}
                  />
                </DropdownPanel>
              </Col>
            </Row>
          </Grid>
        ) : (
          <div className="centered_text_container">
            <h4>Select Samples To Edit</h4>
          </div>
        )}
      </div>
    );
  };
}

export default RightSidebar;

// helpers

function allTheSame(samples, field) {
  if (samples.length) {
    if (Array.isArray(samples[0][field])) {
      if (samples.length > 1) {
        let result = false;
        for (let i = 0; i < samples.length; i++) {
          for (let j = i + 1; j < samples.length; j++) {
            for (let id of samples[i][field]) {
              if (samples[j][field].includes(id)) result = true;
            }
          }
        }
        return result;
      } else {
        return true;
      }
    } else {
      const test = samples[0][field];
      return samples.every(sample => sample[field] === test);
    }
  }
  return false;
}

function findCommon(samples, field) {
  const arrays = [];
  for (let sample of samples) {
    arrays.push(sample[field]);
  }
  const result = arrays.shift().filter(value => {
    return arrays.every(array => {
      return array.indexOf(value) !== -1;
    });
  });
  return result;
}
