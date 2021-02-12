export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

export const setCurrentCategory = (newCategory) => ({
  type: SET_CURRENT_CATEGORY,
  payload: newCategory,
});

const INITIAL_STATE = {
  currentCategory: 0,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.payload
        };
    default:
      return state;
  }
}