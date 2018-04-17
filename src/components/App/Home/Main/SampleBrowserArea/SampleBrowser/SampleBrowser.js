import React from 'react';
import { Glyphicon, Table } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import './SampleBrowser.css';
import SampleRow from './SampleRow/SampleRow';

class SampleBrowser extends React.Component {
  state = {
    focusedSample: '',
    lastSelected: '',
    displayDropzone: false,
    multiSelect: []
  };
  componentDidMount = () => {
    document.addEventListener('keyup', e => {
      // ARROW KEYS
      if (this.state.focusedSample) {
        const focusedSampleIndex = this.props.displayedSamples.findIndex(
          sample => sample.id === this.state.focusedSample
        );
        const lastSelectedIndex = this.props.displayedSamples.findIndex(
          sample => sample.id === this.state.lastSelected
        );
        const maxIndex = this.props.displayedSamples.length - 1;
        let boundaryTestSelected;
        let boundaryTestFocused;
        let next;
        if (e.key === 'ArrowDown') {
          boundaryTestSelected = lastSelectedIndex < maxIndex;
          boundaryTestFocused = focusedSampleIndex < maxIndex;
          next = 1;
        } else if (e.key === 'ArrowUp') {
          boundaryTestSelected = lastSelectedIndex > 0;
          boundaryTestFocused = focusedSampleIndex > 0;
          next = -1;
        }
        let newSampleId;
        if (!e.shiftKey) {
          if (this.state.lastSelected) {
            if (boundaryTestSelected) {
              newSampleId = this.props.displayedSamples[
                lastSelectedIndex + next
              ].id;
              this.setState({
                focusedSample: newSampleId,
                multiSelect: [],
                lastSelected: ''
              });
              this.props.selectSample(newSampleId);
            }
          } else if (this.state.focusedSample) {
            if (boundaryTestFocused) {
              newSampleId = this.props.displayedSamples[
                focusedSampleIndex + next
              ].id;
              this.setState({
                focusedSample: newSampleId
              });
              this.props.selectSample(newSampleId);
            }
          }
        } else {
          if (!this.state.lastSelected && boundaryTestFocused) {
            newSampleId = this.props.displayedSamples[focusedSampleIndex + next]
              .id;
            this.setState(
              {
                multiSelect: [this.state.focusedSample, newSampleId],
                lastSelected: newSampleId
              },
              () => {
                this.props.selectMultipleSamples(this.state.multiSelect);
              }
            );
          } else if (this.state.lastSelected && boundaryTestSelected) {
            newSampleId = this.props.displayedSamples[lastSelectedIndex + next]
              .id;
            if (this.state.multiSelect.includes(newSampleId)) {
              this.setState(
                {
                  multiSelect: this.state.multiSelect.filter(
                    id => id !== this.state.lastSelected
                  ),
                  lastSelected: newSampleId
                },
                () => {
                  this.props.selectMultipleSamples(this.state.multiSelect);
                }
              );
            } else {
              this.setState(
                {
                  multiSelect: [...this.state.multiSelect, newSampleId],
                  lastSelected: newSampleId
                },
                () => {
                  this.props.selectMultipleSamples(this.state.multiSelect);
                }
              );
            }
          }
        }
      }
      // OTHER KEY COMMANDS
      if (
        this.props.selectedSamples.length &&
        document.activeElement.tagName === 'BODY'
      ) {
        switch (e.key) {
          case 'f':
            const allFavorited = this.props.selectedSamples.every(
              sample => sample.favorite === true
            );
            this.props.editSamples(
              this.props.selectedSamples.map(sample => sample.id),
              { favorite: !allFavorited }
            );
            break;
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
            this.props.editSamples(
              this.props.selectedSamples.map(sample => sample.id),
              { rating: e.key }
            );
            break;
          default:
            break;
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
      if (this.state.displayDropzone && (!e.pageX && !e.pageY)) {
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
    const folders =
      this.props.filters.category.type === 'folders'
        ? this.props.filters.category.details
        : [];
    uploadFiles(acceptedFiles, this.props.addSamples, folders);
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
  handleClick = (newSample, multiple = false) => {
    if (!multiple) {
      this.props.selectSample(newSample.id);
      this.setState({ multiSelect: [], lastSelected: '' });
    } else {
      const oldIndex = this.props.displayedSamples.findIndex(
        sample => sample.id === this.state.focusedSample
      );
      const newIndex = this.props.displayedSamples.findIndex(
        sample => sample.id === newSample.id
      );
      const newSelected = [];
      if (oldIndex < newIndex) {
        for (let i = oldIndex; i <= newIndex; i++) {
          newSelected.push(this.props.displayedSamples[i].id);
        }
      } else {
        for (let i = oldIndex; i >= newIndex; i--) {
          newSelected.push(this.props.displayedSamples[i].id);
        }
      }

      this.props.selectMultipleSamples(newSelected);
      this.setState({ multiSelect: newSelected, lastSelected: newSample.id });
    }
  };
  tableClassName = () => {
    let className = '';
    if (this.props.sidebarOpen && !this.props.rightSidebarOpen) {
      className = 'pushed ';
    } else if (!this.props.sidebarOpen && this.props.rightSidebarOpen) {
      className = 'pushed_left ';
    }
    if (this.state.displayDropzone) {
      className += 'faded';
    }
    return className;
  };
  dropzoneClassName = () => {
    let className = 'dropzone';
    if (this.props.rightSidebarOpen) {
      className += ' pushed';
    } else if (this.props.sidebarOpen) {
      className += ' pushed_left';
    }
    return className;
  };
  mapSamplesToRows = () => {
    return Object.keys(this.props.displayedSamples).map(key => {
      return (
        <SampleRow
          key={key}
          sample={this.props.displayedSamples[key]}
          handleClick={this.handleClick}
          focusedSample={this.state.focusedSample}
          changeFocusedSample={this.changeFocusedSample}
          selected={this.props.selectedSamples.find(
            sample => sample.id === this.props.displayedSamples[key].id
          )}
          libraries={this.props.libraries}
          multiSelect={!!this.state.multiSelect.length}
          editSamples={this.props.editSamples}
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
              <th className="album_art_col" />
              <th className="name_col">
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
              <th className="type_col">Type</th>
              <th className="length_col">Time</th>
              <th className="favorite_col">
                <Glyphicon glyph="heart-empty" />
              </th>
              <th className="instrument_col">Instrument</th>
              <th className="genre_col">Genre</th>

              <th className="tempo_col">Tempo</th>
              <th className="key_col">Key</th>
              <th className="rating_col">Rating</th>
            </tr>
          </thead>
          <tbody className={!this.props.filterAreaOpen ? 'expanded' : ''}>
            {this.mapSamplesToRows()}
          </tbody>
        </Table>
        {this.state.displayDropzone ? (
          <Dropzone
            onDrop={this.onDrop}
            className={this.dropzoneClassName()}
            ref="dropzone"
          >
            <p>Drop The Beet</p>
          </Dropzone>
        ) : null}
      </div>
    );
  };
}

export default SampleBrowser;

// helpers

const uploadFiles = (files, addSamples, folders = []) => {
  if (files.length > 0) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`sample[fullres_file][${i}]`, files[i], files[i].name);
    }
    if (folders.length) {
      formData.append(`sample[folders]`, folders);
    }
    addSamples(formData);
  }
};
