import { combineReducers } from 'redux';
import orderBy from './orderBy';
import search from './search';
import category from './category';
import tags from './tags';

const filters = combineReducers({
  orderBy,
  search,
  category,
  tags
});

export default filters;
