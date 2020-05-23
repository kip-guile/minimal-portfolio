import { combineReducers } from "redux";
import { TOGGLE_DARK } from "../actions/types";

const initialMode = true;

const darkModeReducer = (state = initialMode, action) => {
  switch (action.type) {
    case TOGGLE_DARK:
      return !state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dark: darkModeReducer,
});

export default rootReducer;
