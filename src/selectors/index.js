import { createSelector } from 'reselect';

const getSamples = state => state.samples;
const getLibraries = state => state.libraries;
const getFolders = state => state.folders;
const getFilters = state => state.filters;

export const getDisplayedSamples = createSelector(
  [getSamples, getFilters],
  (samples, filters) => {
    let newSamples = Object.keys(samples).map(key => samples[key]);
    if (filters.search) {
      const regex = new RegExp(filters.search, 'i');
      newSamples = newSamples.filter(sample => sample.name.match(regex));
    }
    switch (filters.category.type) {
      case 'favorites':
        newSamples = newSamples.filter(sample => sample.favorite === true);
        break;
      case 'libraries':
        newSamples = newSamples.filter(sample => {
          return filters.category.details.includes(sample.library_id);
        });
        break;
      case 'folders':
        newSamples = newSamples.filter(sample => {
          for (let folderId of sample.folders) {
            if (filters.category.details.includes(folderId)) return true;
          }
          return false;
        });
        break;
      default:
        break;
    }
    if (filters.tags) {
      newSamples = newSamples.filter(sample => {
        // a sample's tags must match every tag in the filter array
        for (let tagId of filters.tags) {
          if (!sample.tags.includes(tagId)) return false;
        }
        return true;
      });
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

export const getDisplayedCategory = createSelector(
  [getFilters, getLibraries, getFolders],
  (filters, libraries, folders) => {
    switch (filters.category.type) {
      case 'all':
        return 'All Samples';
      case 'favorites':
        return 'Favorites';
      case 'libraries':
        if (filters.category.details.length === 1) {
          return libraries[filters.category.details[0]].name;
        } else {
          return `${filters.category.details.length} Libraries`;
        }
      case 'folders':
        if (filters.category.details.length === 1) {
          return folders[filters.category.details[0]].name;
        } else {
          return `${filters.category.details.length} Folders`;
        }
      default:
        break;
    }
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
