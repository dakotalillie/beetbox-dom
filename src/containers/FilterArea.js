import { connect } from 'react-redux';
import FilterArea from '../components/App/Home/Main/FilterArea/FilterArea';
import { setSampleSearch, changeTags } from '../actions';
import { getDisplayedSamples } from '../selectors';

const mapStateToProps = state => ({
  tags: state.tags,
  filters: state.filters,
  displayedSamples: getDisplayedSamples(state)
});

export default connect(mapStateToProps, { setSampleSearch, changeTags })(
  FilterArea
);
