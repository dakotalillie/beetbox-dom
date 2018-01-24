import { connect } from 'react-redux';
import FilterArea from '../components/App/Home/Main/FilterArea/FilterArea';
import {
  setSampleSearch,
  changeTags,
  changeSampleType,
  changeInstrument,
  changeTempo,
  changeKey,
  changeGenre,
  changeRating
} from '../actions';
import { getDisplayedSamples } from '../selectors';

const mapStateToProps = state => ({
  tags: state.tags,
  filters: state.filters,
  displayedSamples: getDisplayedSamples(state),
  samples: state.samples
});

export default connect(mapStateToProps, {
  setSampleSearch,
  changeTags,
  changeSampleType,
  changeInstrument,
  changeTempo,
  changeKey,
  changeGenre,
  changeRating
})(FilterArea);
