import { LOADED } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOADED:
      return Object.assign({}, state, {
        loaded: true
      });
    default:
      return state
  }
}

export default reducer;
