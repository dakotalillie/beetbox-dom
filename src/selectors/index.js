import { createSelector } from 'reselect';

const getSamples = state => state.samples;
const getFilters = state => state.filters;

export const getDisplayedSamples = createSelector(
  [getSamples, getFilters],
  (samples, filters) => {
    let newSamples = Object.keys(samples).map(key => samples[key]);
    if (filters.search) {
      const regex = new RegExp(filters.search, 'i');
      newSamples = newSamples.filter(sample => sample.name.match(regex));
    }
    switch (filters.orderBy.column) {
      case 'name':
        newSamples = newSamples.sort((a, b) => {
          return alphabetize(a.name, b.name);
        });
        if (filters.orderBy.direction === 'desc') {
          newSamples = newSamples.reverse();
        }
        break;
      default:
        break;
    }
    return newSamples;
  }
);

const alphabetize = (name1, name2) => {
  // are they the same?
  if (name1[0] === name2[0]) {
    return alphabetize(name1.slice(1), name2.slice(1));
  }
  // are either both numbers or neither numbers?
  if (/\d/.test(name1[0]) === /\d/.test(name2[0])) {
    // if they are numbers
    if (/\d/.test(name1[0])) {
      return parseInt(name1[0], 10) - parseInt(name2[0], 10);
    } else {
      return name1[0].toLowerCase() - name2[0].toLowerCase();
    }
  } else {
    // whichever one is a number comes first
    if (/\d/.test(name1[0])) {
      return -1;
    } else {
      return 1;
    }
  }
};
