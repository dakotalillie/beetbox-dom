import { connect } from 'react-redux';
import Sidebar from '../components/App/Home/Sidebar/Sidebar';
import { changeCategory } from '../actions';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  folders: state.folders,
  libraries: state.libraries,
  filters: state.filters
});

export default connect(mapStateToProps, { changeCategory })(Sidebar);
