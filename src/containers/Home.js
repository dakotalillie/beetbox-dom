import { connect } from 'react-redux';
import Home from '../components/App/Home/Home';
import { changeFocusedSample } from '../actions';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen,
  focusedSample: state.focusedSample,
  displayedSamples: state.displayedSamples
});

export default connect(mapStateToProps, { changeFocusedSample })(Home);
