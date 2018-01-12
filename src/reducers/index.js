import { combineReducers } from 'redux';
import sidebarOpen from './sidebarOpen';
import isLoggedIn from './isLoggedIn';
import currentUser from './currentUser';
import folders from './folders';
import libraries from './libraries';
import samples from './samples';
import tags from './tags';
import sampleSearch from './sampleSearch';

const rootReducer = combineReducers({
  isLoggedIn,
  currentUser,
  folders,
  libraries,
  samples,
  tags,
  sidebarOpen,
  sampleSearch
});

export default rootReducer;
