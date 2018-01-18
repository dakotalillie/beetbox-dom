import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import ReactStars from 'react-stars';
import './SampleRow.css';
import missingAlbumArt from '../../../../../../../assets/img/missing_albumart.jpg';

class SampleRow extends React.Component {
  state = {
    hovered: false,
    playing: false,
    selected: false
  };
  handlePlayback = () => {
    if (!this.state.playing) {
      this.props.changeFocusedSample(this.props.sample.id);
    }
    this.refs.audio.play();
  };
  componentWillReceiveProps = nextProps => {
    if (
      nextProps.focusedSample === this.props.sample.id &&
      this.props.focusedSample !== this.props.sample.id
    ) {
      this.refs.audio.play();
    } else if (
      nextProps.focusedSample !== this.props.sample.id &&
      this.state.playing
    ) {
      this.refs.audio.pause();
      this.refs.audio.currentTime = 0;
    }
    if (nextProps.selected) {
      this.setState({ selected: true });
    } else if (!nextProps.selected) {
      this.setState({ selected: false });
    }
  };
  render = () => {
    const sample = this.props.sample;
    return (
      <tr
        className={
          'sample_row' +
          (this.props.focusedSample === this.props.sample.id ? ' focused' : '')
        }
      >
        <td>
          <input
            type="checkbox"
            onClick={() => this.props.toggleSampleSelect(sample.id)}
            checked={this.state.selected}
          />
        </td>
        <td
          onClick={this.handlePlayback}
          className="album_art"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
        >
          <img src={missingAlbumArt} alt="cover" />
          {this.state.hovered || this.state.playing ? (
            <Button className="play_button">
              <Glyphicon glyph={this.state.playing ? 'stop' : 'play'} />
            </Button>
          ) : null}
          <audio
            src={sample.preview_url}
            ref="audio"
            onPlay={() => this.setState({ playing: true })}
            onPause={() => this.setState({ playing: false })}
            onEnded={() => this.setState({ playing: false })}
          />
        </td>
        <td>{sample.name}</td>
        <td>{sample.sample_type}</td>
        <td>{formatLength(sample.length)}</td>
        <td>
          <Glyphicon glyph="heart-empty" />
        </td>
        <td>{sample.tempo ? sample.tempo : '--'}</td>
        <td>{sample.key ? sample.key : '--'}</td>
        <td>
          <ReactStars count={5} size={15} half={false} />
        </td>
      </tr>
    );
  };
}

export default SampleRow;

// helpers

const formatLength = length => {
  const seconds = Math.round(length);
  if (seconds <= 0) {
    return `0:01`;
  } else if (seconds < 10) {
    return `0:0${seconds}`;
  } else if (seconds >= 10 && seconds < 60) {
    return `0:${seconds}`;
  } else {
    return seconds;
  }
};
