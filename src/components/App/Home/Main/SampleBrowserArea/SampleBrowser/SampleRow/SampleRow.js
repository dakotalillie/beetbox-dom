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
  handlePlayback = e => {
    e.stopPropagation();
    if (!this.state.playing) {
      this.props.changeFocusedSample(this.props.sample.id);
    }
    this.refs.audio.play();
  };
  handleClick = (e, sample) => {
    if (!e.shiftKey) {
      this.handlePlayback(e);
      this.props.handleClick(sample);
    } else {
      this.props.handleClick(sample, true);
    }
  };
  componentWillReceiveProps = nextProps => {
    if (
      nextProps.focusedSample === this.props.sample.id &&
      this.props.focusedSample !== this.props.sample.id &&
      !nextProps.multiSelect
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
    const artworkUrl = sample.library_id
      ? this.props.libraries[sample.library_id].artwork_url
      : null;
    return (
      <tr
        className={'sample_row' + (this.props.selected ? ' focused' : '')}
        onClick={e => this.handleClick(e, sample)}
      >
        <td
          onClick={this.handlePlayback}
          className="album_art_col"
          onMouseEnter={() => this.setState({ hovered: true })}
          onMouseLeave={() => this.setState({ hovered: false })}
        >
          <img src={artworkUrl || missingAlbumArt} alt="cover" />
          {this.state.hovered || this.state.playing ? (
            <Button className="play_button">
              <Glyphicon glyph={this.state.playing ? 'stop' : 'play'} />
            </Button>
          ) : null}
          <audio
            src={sample.preview_url}
            ref="audio"
            onPlay={() => this.setState({ playing: true })}
            onPause={() =>
              this.setState({
                playing: false
              })
            }
            onEnded={() => this.setState({ playing: false })}
          />
        </td>
        <td className="name_col">{sample.name}</td>
        <td className="type_col">{formatType(sample.sample_type)}</td>
        <td className="length_col">{formatLength(sample.length)}</td>
        <td className="favorite_col">
          <Glyphicon glyph={sample.favorite ? 'heart' : 'heart-empty'} />
        </td>
        <td className="tempo_col">{sample.tempo ? sample.tempo : ''}</td>
        <td className="key_col">{sample.key ? formatKey(sample.key) : ''}</td>
        <td className="rating_col">
          <ReactStars count={5} size={15} half={false} value={sample.rating} />
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

const formatKey = key => {
  if (key === key.toLowerCase()) {
    return `${key.toUpperCase()}m`;
  }
  return key;
};

const formatType = type => {
  if (type === 'one-shot') {
    return <Glyphicon glyph="arrow-right" />;
  } else if (type === 'loop') {
    return <Glyphicon glyph="refresh" />;
  } else {
    return '';
  }
};
