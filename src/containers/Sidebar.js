import { connect } from 'react-redux';
import Sidebar from '../components/App/Home/Sidebar/Sidebar';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  folders: state.folders,
  libraries: state.libraries
});

export default connect(mapStateToProps, null)(Sidebar);
