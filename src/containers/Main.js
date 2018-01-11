import { connect } from 'react-redux';
import Main from '../components/App/Home/Main/Main';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen
});

export default connect(mapStateToProps, null)(Main);
