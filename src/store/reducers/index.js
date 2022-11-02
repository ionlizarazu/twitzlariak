import { combineReducers } from 'redux';

import erabiltzaileakReducer from './erabiltzaileak';
import zuzenekoakReducer from './zuzenekoak';
import klipakReducer from './klipak';

const rootReducer = combineReducers({
  erabiltzaileak: erabiltzaileakReducer,
  zuzenekoak: zuzenekoakReducer,
  klipak: klipakReducer,
});

export default rootReducer;
