import {
  TOGGLE_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  TOGGLE_NEW_ITEM_MODAL,
  TOGGLE_FILTER_AREA,
  SET_SAMPLE_SEARCH,
  SELECT_SAMPLE,
  SELECT_MULTIPLE_SAMPLES,
  TOGGLE_ALL_SAMPLES_SELECT,
  REORDER_SAMPLES,
  CHANGE_CATEGORY,
  CHANGE_TAGS,
  CHANGE_SAMPLE_TYPE,
  CHANGE_INSTRUMENT,
  CHANGE_TEMPO,
  CHANGE_KEY,
  CHANGE_GENRE,
  CHANGE_RATING,
  RESET_FILTERS
} from '../constants/actionTypes';

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR
  };
};

export const toggleRightSidebar = () => {
  return {
    type: TOGGLE_RIGHT_SIDEBAR
  };
};

export const toggleNewItemModal = (item = null, id = null) => {
  return {
    type: TOGGLE_NEW_ITEM_MODAL,
    payload: {
      item,
      id
    }
  };
};

export const toggleFilterArea = () => {
  return {
    type: TOGGLE_FILTER_AREA
  };
};

export const setSampleSearch = value => {
  return {
    type: SET_SAMPLE_SEARCH,
    payload: {
      value
    }
  };
};

export const selectSample = id => {
  return {
    type: SELECT_SAMPLE,
    payload: {
      id
    }
  };
};

export const selectMultipleSamples = ids => {
  return {
    type: SELECT_MULTIPLE_SAMPLES,
    payload: {
      ids
    }
  };
};

export const toggleAllSamplesSelect = displayedIds => {
  return {
    type: TOGGLE_ALL_SAMPLES_SELECT,
    payload: {
      ids: displayedIds
    }
  };
};

export const reorderSamples = (column, direction) => {
  return {
    type: REORDER_SAMPLES,
    payload: {
      column,
      direction
    }
  };
};

export const changeCategory = (type = 'all', details = []) => {
  return {
    type: CHANGE_CATEGORY,
    payload: {
      type,
      details
    }
  };
};

export const changeTags = (tags = []) => {
  return {
    type: CHANGE_TAGS,
    payload: {
      tags
    }
  };
};

export const changeSampleType = (type = '') => {
  return {
    type: CHANGE_SAMPLE_TYPE,
    payload: {
      type
    }
  };
};

export const changeInstrument = instrument => {
  return {
    type: CHANGE_INSTRUMENT,
    payload: {
      instrument
    }
  };
};

export const changeTempo = rangeArray => {
  return {
    type: CHANGE_TEMPO,
    payload: {
      low: rangeArray[0],
      high: rangeArray[1]
    }
  };
};

export const changeKey = key => {
  return {
    type: CHANGE_KEY,
    payload: {
      key
    }
  };
};

export const changeGenre = genre => {
  return {
    type: CHANGE_GENRE,
    payload: {
      genre
    }
  };
};

export const changeRating = rating => {
  return {
    type: CHANGE_RATING,
    payload: {
      rating
    }
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS
  };
};
