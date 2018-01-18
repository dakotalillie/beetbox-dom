import { combineReducers } from 'redux';
import orderBy from './orderBy';
import search from './search';

const filters = combineReducers({
  orderBy,
  search
});

export default filters;
