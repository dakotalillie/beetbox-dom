import { TOGGLE_NEW_ITEM_MODAL } from '../constants/actionTypes';

const newItemModal = (
  state = { open: false, item: null, id: null },
  action
) => {
  switch (action.type) {
    case TOGGLE_NEW_ITEM_MODAL:
      return {
        open: !state.open,
        item: action.payload.item,
        id: action.payload.id
      };
    default:
      return state;
  }
};

export default newItemModal;
