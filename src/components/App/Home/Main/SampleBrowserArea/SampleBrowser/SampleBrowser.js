import React from 'react';
import { Glyphicon, Table } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import './SampleBrowser.css';
import SampleRow from './SampleRow/SampleRow';

class SampleBrowser extends React.Component {
  // state = {
  //   samples: Object.keys(this.props.samples).map(key => this.props.samples[key])
  // };
  // componentWillReceiveProps = nextProps => {
  //   this.setState({
  //     samples: Object.keys(nextProps.samples).map(key => nextProps.samples[key])
  //   });
  // };
  onDrop = () => {
    console.log('dropped');
  };
  tableClassName = () => {
    let className = '';
    if (this.props.sidebarOpen) {
      className = 'pushed ';
    }
    if (this.props.dropzoneVisible) {
      className += 'faded';
    }
    return className;
  };
  render = () => {
    const {
      sidebarOpen,
      sampleSearch,
      toggleSampleSelect,
      focusedSample,
      changeFocusedSample,
      displayedSamples,
      selectedSamples,
      dropzoneVisible
    } = this.props;
    return (
      <div className="sample_browser">
        <Table striped bordered className={this.tableClassName()}>
          <thead>
            <tr>
              <th />
              <th />
              <th>Name</th>
              <th>Type</th>
              <th>Length</th>
              <th className="favorite_column">
                <Glyphicon glyph="heart-empty" />
              </th>
              <th>Tempo</th>
              <th>Key</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {mapSamplesToRows(
              displayedSamples,
              sampleSearch,
              toggleSampleSelect,
              focusedSample,
              changeFocusedSample,
              selectedSamples
            )}
          </tbody>
        </Table>
        {dropzoneVisible ? (
          <Dropzone onDrop={this.onDrop} className="dropzone">
            <p>Drop The Beet</p>
          </Dropzone>
        ) : null}
      </div>
    );
  };
}

const mapSamplesToRows = (
  displayedSamples,
  sampleSearch,
  toggleSampleSelect,
  focusedSample,
  changeFocusedSample,
  selectedSamples
) => {
  const searched = Object.keys(displayedSamples).reduce((memo, key) => {
    const sample = displayedSamples[key];
    const query = new RegExp(sampleSearch, 'i');
    if (sample.name.match(query)) {
      memo[key] = sample;
    }
    return memo;
  }, {});
  return Object.keys(searched).map(key => {
    return (
      <SampleRow
        key={key}
        sample={searched[key]}
        toggleSampleSelect={toggleSampleSelect}
        focusedSample={focusedSample}
        changeFocusedSample={changeFocusedSample}
        selected={selectedSamples.find(
          sample => sample.id === searched[key].id
        )}
      />
    );
  });
};

export default SampleBrowser;
