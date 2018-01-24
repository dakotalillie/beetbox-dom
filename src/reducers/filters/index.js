import { combineReducers } from 'redux';
import orderBy from './orderBy';
import search from './search';
import category from './category';
import tags from './tags';
import sampleType from './sampleType';
import instruments from './instruments';
import tempo from './tempo';
import key from './key';
import genre from './genre';
import rating from './rating';

const filters = combineReducers({
  orderBy,
  search,
  category,
  tags,
  sampleType,
  instruments,
  tempo,
  key,
  genre,
  rating
});

export default filters;
