import { connect } from 'react-redux';
import SampleBrowserArea from '../components/App/Home/Main/SampleBrowserArea/SampleBrowserArea';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  samples: state.samples,
  sampleSearch: state.sampleSearch,
  sidebarOpen: state.sidebarOpen
});

export default connect(mapStateToProps, null)(SampleBrowserArea);
