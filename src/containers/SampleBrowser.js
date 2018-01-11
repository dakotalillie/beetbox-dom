import { connect } from 'react-redux';
import SampleBrowser from '../components/App/Home/Main/SampleBrowserArea/SampleBrowser/SampleBrowser';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen
});

export default connect(mapStateToProps, null)(SampleBrowser);
