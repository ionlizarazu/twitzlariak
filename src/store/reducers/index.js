import { combineReducers } from 'redux';

import erabiltzaileakReducer from './erabiltzaileak';
import zuzenekoakReducer from './zuzenekoak';
import klipakReducer from './klipak';
import bideoakReducer from './bideoak';

const rootReducer = combineReducers({
  erabiltzaileak: erabiltzaileakReducer,
  zuzenekoak: zuzenekoakReducer,
  klipak: klipakReducer,
  bideoak: bideoakReducer,
});

export default rootReducer;
