import { combineReducers } from 'redux';
import sidebarOpen from './sidebarOpen';
import rightSidebarOpen from './rightSidebarOpen';
import isLoggedIn from './isLoggedIn';
import currentUser from './currentUser';
import folders from './folders';
import libraries from './libraries';
import samples from './samples';
import tags from './tags';
import filters from './filters/index';
import selectedSamples from './selectedSamples';
import newItemModal from './newItemModal';

const rootReducer = combineReducers({
  isLoggedIn,
  currentUser,
  folders,
  libraries,
  samples,
  tags,
  sidebarOpen,
  rightSidebarOpen,
  filters,
  selectedSamples,
  newItemModal
});

export default rootReducer;
