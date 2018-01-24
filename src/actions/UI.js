import {
  TOGGLE_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  TOGGLE_NEW_ITEM_MODAL,
  SET_SAMPLE_SEARCH,
  TOGGLE_SAMPLE_SELECT,
  TOGGLE_ALL_SAMPLES_SELECT,
  REORDER_SAMPLES,
  CHANGE_CATEGORY,
  CHANGE_TAGS,
  CHANGE_SAMPLE_TYPE,
  CHANGE_INSTRUMENT
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

export const setSampleSearch = value => {
  return {
    type: SET_SAMPLE_SEARCH,
    payload: {
      value
    }
  };
};

export const toggleSampleSelect = id => {
  return {
    type: TOGGLE_SAMPLE_SELECT,
    payload: {
      id
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
