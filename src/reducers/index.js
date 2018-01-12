import { combineReducers } from 'redux';
import sidebarOpen from './sidebarOpen';
import isLoggedIn from './isLoggedIn';
import currentUser from './currentUser';

const rootReducer = combineReducers({ sidebarOpen, isLoggedIn, currentUser });

export default rootReducer;
