import { connect } from 'react-redux';
import Home from '../components/App/Home/Home';
import { receiveAddedSample } from '../actions';

const mapStateToProps = state => ({
  sidebarOpen: state.sidebarOpen,
  rightSidebarOpen: state.rightSidebarOpen,
  currentUser: state.currentUser,
  newItemModal: state.newItemModal
});

export default connect(mapStateToProps, {
  receiveAddedSample
})(Home);
