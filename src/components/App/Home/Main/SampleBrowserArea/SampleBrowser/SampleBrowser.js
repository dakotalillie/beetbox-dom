import React from 'react';
import { Glyphicon, Table } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import './SampleBrowser.css';
import SampleRow from './SampleRow/SampleRow';

class SampleBrowser extends React.Component {
  state = {
    focusedSample: '',
    displayDropzone: false
  };
  componentDidMount = () => {
    document.addEventListener('keyup', e => {
      if (this.state.focusedSample) {
        const oldIndex = this.props.displayedSamples.findIndex(
          sample => sample.id === this.state.focusedSample
        );
        let newSampleId;
        if (e.key === 'ArrowDown') {
          if (oldIndex < this.props.displayedSamples.length - 1) {
            newSampleId = this.props.displayedSamples[oldIndex + 1].id;
            this.setState({ focusedSample: newSampleId });
          }
        } else if (e.key === 'ArrowUp') {
          if (oldIndex > 0) {
            newSampleId = this.props.displayedSamples[oldIndex - 1].id;
            this.setState({ focusedSample: newSampleId });
          }
        }
      }
    });
    document.addEventListener('dragover', e => {
      const dt = e.dataTransfer;
      if (
        dt.types &&
        (dt.types.indexOf
          ? dt.types.indexOf('Files') !== -1
          : dt.types.contains('Files')) &&
        !this.state.displayDropzone
      ) {
        this.setState({ displayDropzone: true });
      }
    });
    document.addEventListener('dragleave', e => {
      if (this.state.dropzoneVisible && (!e.screenX && !e.screenY)) {
        this.setState({ displayDropzone: false });
      }
    });
    document.querySelector('.sample_browser').addEventListener('drop', e => {
      e.preventDefault();
      this.setState({ displayDropzone: false });
      this.onDrop(e.dataTransfer.files);
    });
  };
  onDrop = acceptedFiles => {
    uploadFiles(acceptedFiles, this.props.addSamples);
  };
  changeFocusedSample = id => {
    this.setState({ focusedSample: id });
  };
  handleReorder = column => {
    if (column === this.props.orderBy.column) {
      if (this.props.orderBy.direction === 'asc') {
        this.props.reorderSamples(column, 'desc');
      } else if (this.props.orderBy.direction === 'desc') {
        this.props.reorderSamples(column, 'asc');
      }
    }
  };
  tableClassName = () => {
    let className = '';
    if (this.props.sidebarOpen && !this.props.rightSidebarOpen) {
      className = 'pushed ';
    } else if (!this.props.sidebarOpen && this.props.rightSidebarOpen) {
      className = 'pushed_left ';
    }
    if (this.props.dropzoneVisible) {
      className += 'faded';
    }
    return className;
  };
  mapSamplesToRows = () => {
    return Object.keys(this.props.displayedSamples).map(key => {
      return (
        <SampleRow
          key={key}
          sample={this.props.displayedSamples[key]}
          toggleSampleSelect={this.props.toggleSampleSelect}
          focusedSample={this.state.focusedSample}
          changeFocusedSample={this.changeFocusedSample}
          selected={this.props.selectedSamples.find(
            sample => sample.id === this.props.displayedSamples[key].id
          )}
        />
      );
    });
  };
  render = () => {
    return (
      <div className="sample_browser">
        <Table striped bordered className={this.tableClassName()}>
          <thead>
            <tr>
              <th />
              <th />
              <th>
                Name
                <Glyphicon
                  glyph={
                    this.props.orderBy.direction === 'asc'
                      ? 'triangle-bottom'
                      : 'triangle-top'
                  }
                  className="order_arrow"
                  onClick={() => this.handleReorder('name')}
                />
              </th>
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
          <tbody>{this.mapSamplesToRows()}</tbody>
        </Table>
        {this.state.displayDropzone ? (
          <Dropzone onDrop={this.onDrop} className="dropzone" ref="dropzone">
            <p>Drop The Beet</p>
          </Dropzone>
        ) : null}
      </div>
    );
  };
}

export default SampleBrowser;

// helpers

const uploadFiles = (files, addSamples) => {
  if (files.length > 0) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`sample[fullres_file][${i}]`, files[i], files[i].name);
    }
    addSamples(formData);
  }
};
