import { connect } from 'react-redux';
import Home from '../components/App/Home/Home';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen
});

export default connect(mapStateToProps, null)(Home);
