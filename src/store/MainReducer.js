export const SET_IS_AUTH = 'SET_IS_AUTH';

export const setIsAuthenticated = (payload) => ({
  type: SET_IS_AUTH,
  payload,
});

const INITIAL_STATE = {
  isAuthenticated: false,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    default:
      return state;
  }
}