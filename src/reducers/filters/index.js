import { combineReducers } from 'redux';
import orderBy from './orderBy';
import search from './search';
import category from './category';
import tags from './tags';
import sampleType from './sampleType';
import instruments from './instruments';

const filters = combineReducers({
  orderBy,
  search,
  category,
  tags,
  sampleType,
  instruments
});

export default filters;
