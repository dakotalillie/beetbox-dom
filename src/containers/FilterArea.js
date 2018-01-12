import { connect } from 'react-redux';
import FilterArea from '../components/App/Home/Main/FilterArea/FilterArea';
import { setSampleSearch } from '../actions';

const mapStateToProps = state => ({
  tags: state.tags
});

export default connect(mapStateToProps, { setSampleSearch })(FilterArea);
